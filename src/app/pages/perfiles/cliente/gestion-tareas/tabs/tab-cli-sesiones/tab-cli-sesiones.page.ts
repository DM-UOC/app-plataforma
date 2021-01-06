import { Component, OnInit } from '@angular/core';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { ISesion } from 'src/app/interfaces/sesiones/sesion.interface';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { SesionesService } from 'src/app/services/sesiones/sesiones.service';

@Component({
  selector: 'app-tab-cli-sesiones',
  templateUrl: './tab-cli-sesiones.page.html',
  styleUrls: ['./tab-cli-sesiones.page.scss'],
})
export class TabCliSesionesPage implements OnInit {

  sesiones: ISesion[] = [];
  private usuario: IToken;

  constructor(
    private seguridadService: SeguridadService,
    private sesionesService: SesionesService
  ) { }

  ngOnInit() {
    // recupera la inforamción del usuario...
    this.usuario = this.seguridadService.getUsuarioToken();
    // retorna sesiones usuario..
    this.retornaSesionesRepresentantePorId();
  }

  private retornaSesionesRepresentantePorId() {
    this.sesionesService
      .retornaSesionesRepresentantePorId(this.usuario.usuario)
      .subscribe(sesiones => this.sesiones = sesiones);
  }

}
