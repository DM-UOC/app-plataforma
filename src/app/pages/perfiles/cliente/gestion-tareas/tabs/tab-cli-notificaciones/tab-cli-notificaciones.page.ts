import { Component, OnInit } from '@angular/core';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { INotificacion } from 'src/app/interfaces/notificaciones/notificacion.interface';
import { NotificacionesService } from 'src/app/services/notificaciones/notificaciones.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';

@Component({
  selector: 'app-tab-cli-notificaciones',
  templateUrl: './tab-cli-notificaciones.page.html',
  styleUrls: ['./tab-cli-notificaciones.page.scss'],
})
export class TabCliNotificacionesPage implements OnInit {

  notificaciones: INotificacion[] = [];
  private usuario: IToken;

  constructor(
    private notificacionesService: NotificacionesService,
    private seguridadService: SeguridadService
  ) { }

  ngOnInit() {
    // recupera la inforamción del usuario...
    this.usuario = this.seguridadService.getUsuarioToken();
    // retorna sesiones usuario..
    this.retornaNotificacionesRepresentantePorId();    
  }

  private retornaNotificacionesRepresentantePorId() {
    this.notificacionesService
      .retornaNotificacionesRepresentantePorId(this.usuario.usuario)
      .subscribe(notificaciones => this.notificaciones = notificaciones);
  }

}
