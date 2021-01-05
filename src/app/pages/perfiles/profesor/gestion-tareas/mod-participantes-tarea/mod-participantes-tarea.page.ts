import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ITarea } from 'src/app/interfaces/tareas/tarea.interface';
import { LectivosTareasService } from 'src/app/services/lectivos/lectivos.tareas.service';
import { UtilitariosService } from 'src/app/services/utilitarios.service';

@Component({
  selector: 'app-mod-participantes-tarea',
  templateUrl: './mod-participantes-tarea.page.html',
  styleUrls: ['./mod-participantes-tarea.page.scss'],
})
export class ModParticipantesTareaPage implements OnInit {

  @Input()tarea: ITarea;
  representantes: any[] = [];
  muestraHijos: boolean = true;

  constructor(
    private modalController: ModalController,
    private lectivosTareasService: LectivosTareasService,
    private utilitariosService: UtilitariosService
  ) { }

  ngOnInit() {
    // retorna litato tareas representantes...
    this.retornaParticipantesTareas();
    // verifica cambio representante...
    this.verificaCambioRepresentantes();
  }

  private retornaParticipantesTareas() {
    this.lectivosTareasService
      .retornaRepresentantesTareas(this.tarea)
      .subscribe((representantes: any) => {
        this.representantes = representantes;
      });
  }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

  verificaCambioRepresentantes() {
    // verificando emite...
    this.lectivosTareasService.creoRepresentante.subscribe(async (result: boolean) => {
      if(result) {
        this.retornaParticipantesTareas();
      }
    });    
  }

  private async emiteCambioTarea() {
    // emito el cambio...
    this.lectivosTareasService.actualizaListado = true;
    this.lectivosTareasService.creoRepresentante.emit(this.lectivosTareasService.actualizaListado); 
  }

  agregarRepresentante(representante: any) {
    try {
      this.lectivosTareasService
      .registraRepresentante(representante._id, this.tarea._id)
      .subscribe(tarea => {
        this.emiteCambioTarea();
        this.verificaCambioRepresentantes();
        // presnetamos el mensaje de exito...
        this.utilitariosService.retornaMensajeCorto({
          message: 'Se agrego la terea al representante correctamente: ' + this.tarea.descripcion,
          duration: 2000
        });
      });
    } catch (error) {
      throw error;
    }
  }

}
