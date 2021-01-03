import { Component, OnInit } from '@angular/core';
import { Plugins } from "@capacitor/core";
import { MenuController } from '@ionic/angular';
import { ICatalogo } from 'src/app/interfaces/catalogo.interface';
import { INotificacion } from 'src/app/interfaces/notificaciones/notificacion.interface';
import { NotificacionesService } from 'src/app/services/notificaciones/notificaciones.service';
import { ClientesService } from 'src/app/services/perfiles/clientes/clientes.service';
import { MenuService } from 'src/app/services/seguridades/menu.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  
  private catalgo: ICatalogo;
  private representante: any;
  private notificaciones: INotificacion[] = [];

  constructor(
    private menuService: MenuService,
    private seguridadService: SeguridadService,
    private notificacionesService: NotificacionesService,
    private menuController: MenuController,
    private clientesService: ClientesService
  ) { 
  }

  async ngOnInit() {
    try {
      // prueba de notificaciones...
      await LocalNotifications.requestPermission();
      // menu usuario...
      this.setMenuUsuario();
      // verifica datpos del representante...
      await this.verificaExisteRepresentante();
    } catch (error) {
      throw error;
    }
  }

  private enviaEmisionCambioMenu() {
    // emito el cambio...
    this.menuService.actualizaMenu = true;
    this.menuService.cambioMenu.emit(this.menuService.actualizaMenu);    
  }

  private async setMenuUsuario() {
    // habilitando el menu...
    this.menuController.enable(true);    
    // recuperando los items del menu...
    this.catalgo = await this.seguridadService.retornaMenuUsuario();
    // agregando el menu del perfil...
    await this.menuService.setPages(this.catalgo.arreglo1);
    //emite el cambio..
    this.enviaEmisionCambioMenu();
  }

  private async verificaExisteRepresentante() {
    try {
      const usuario = this.seguridadService.getUsuarioToken();
      // verificando si existe el usuario tipo cliente en la coleccion representantes...
      if(usuario.codigo_perfil === 3) {
        // verificando el usuario tipo cliente...
        this.representante = await this.clientesService.verificaExisteRepresentante(usuario.usuario);
        this.clientesService.setRepresentante(this.representante);
        // obtenemos las notificaicones del cliente...
        this.retornaNotificaciones();
      }
    } catch (error) {
      throw error;
    }
  }

  private retornaNotificaciones() {
    // retorna notificaciones...
    this.notificacionesService
      .retornaNoticiacionesPorRepresentante(this.representante._id)
      .subscribe(async (notificaciones) => {
        // recupera las notificaciones...
        this.notificaciones = notificaciones;
        // dispramos las notificaciones...
        await this.enviarNotificacion();

      });
  }

  private async enviarNotificacion() {
    // recuperando las notificaciones...
    const notifications: any = this.notificaciones.map(notificaion => {
      return notificaion.cuerpo_notificacion;
    });
    // enviando las notificaciones...
    await LocalNotifications.schedule({
      notifications
    });
  }

  toggleMenu() {
    this.menuController.toggle();
  }
  
}
