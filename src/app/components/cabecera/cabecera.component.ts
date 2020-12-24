import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  usuario: any;

  constructor(
    private seguridadService: SeguridadService,
  ) { }

  ngOnInit() {
    // recogiendo datos del usuario que se conecta...
    this.usuario = this.seguridadService.getUsuarioToken();
  }

}
