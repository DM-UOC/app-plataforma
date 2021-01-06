import { Component, OnInit } from '@angular/core';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { LectivosTareasService } from 'src/app/services/lectivos/lectivos.tareas.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';

@Component({
  selector: 'app-tab-cli-tareas',
  templateUrl: './tab-cli-tareas.page.html',
  styleUrls: ['./tab-cli-tareas.page.scss'],
})
export class TabCliTareasPage implements OnInit {

  tareas: any[] = [];
  private usuario: IToken;

  constructor(
    private lectivosTareasService: LectivosTareasService,
    private seguridadService: SeguridadService
  ) { }

  ngOnInit() {
    // recupera la inforamción del usuario...
    this.usuario = this.seguridadService.getUsuarioToken();
    // retorna sesiones usuario..
    this.retornaNotificacionesRepresentantePorId();    
  }

  private retornaNotificacionesRepresentantePorId() {
    this.lectivosTareasService
      .retornaTareasRepresentantePorId(this.usuario.usuario)
      .subscribe(tareas => this.tareas = tareas);
  }

  entregarTarea(tarea){
    console.log(tarea);
  }
}
