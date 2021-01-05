import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ITarea } from 'src/app/interfaces/tareas/tarea.interface';
import { LectivosTareasService } from 'src/app/services/lectivos/lectivos.tareas.service';
import { UtilitariosService } from 'src/app/services/utilitarios.service';

@Component({
  selector: 'app-mod-listado-participantes-tarea',
  templateUrl: './mod-listado-participantes-tarea.page.html',
  styleUrls: ['./mod-listado-participantes-tarea.page.scss'],
})
export class ModListadoParticipantesTareaPage implements OnInit {

  @Input()tarea: ITarea;
  representantes: any[] = [];

  constructor(
    private modalController: ModalController,
    private lectivosTareasService: LectivosTareasService,
    private utilitariosService: UtilitariosService
  ) { }

  ngOnInit() {
    this.retornaListaRepresentantesTareas();
    // verifica cambio representante...
    this.verificaCambioRepresentantes()    
  }

  private retornaListaRepresentantesTareas() {
    try {
      this.lectivosTareasService
      .retornaListaRepresentantesTareas(this.tarea)
      .subscribe(representantes => {
        this.representantes = representantes;
      });
    } catch (error) {
      throw error;
    }
  }

  private verificaCambioRepresentantes() {
    // verificando emite...
    this.lectivosTareasService.creoRepresentante.subscribe(async (result: boolean) => {
      // verifica si hubo cambio...
      if(result) {
        this.retornaListaRepresentantesTareas();
      }
    });    
  }

  retirarRepresentante(representante: any) {
    try {
      this.lectivosTareasService
      .retirarRepresentanteTarea(representante._id, representante.representantes_tareas.representante_id)
      .subscribe((lectivoTarea) => {
        this.emiteCambioTarea();
        this.verificaCambioRepresentantes();
        // presnetamos el mensaje de exito...
        this.utilitariosService.retornaMensajeCorto({
          message: 'El participante fue retirado correctamente: ' + this.tarea.descripcion,
          duration: 2000
        });        
      });
    } catch (error) {
      throw error;
    }
  }

  private async emiteCambioTarea() {
    // emito el cambio...
    this.lectivosTareasService.actualizaListado = true;
    this.lectivosTareasService.creoRepresentante.emit(this.lectivosTareasService.actualizaListado); 
  }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

}
