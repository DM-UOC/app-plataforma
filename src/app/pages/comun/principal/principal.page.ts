import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ICatalogo } from 'src/app/interfaces/catalogo.interface';
import { ClientesService } from 'src/app/services/perfiles/clientes/clientes.service';
import { MenuService } from 'src/app/services/seguridades/menu.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  
  private catalgo: ICatalogo;
  private representante: any;

  constructor(
    private menuService: MenuService,
    private seguridadService: SeguridadService,
    private menuController: MenuController,
    private clientesService: ClientesService
  ) { 
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
      }
    } catch (error) {
      throw error;
    }
  }

  async ngOnInit() {
    try {
      // menu usuario...
      this.setMenuUsuario();
      await this.verificaExisteRepresentante();
    } catch (error) {
      throw error;
    }
  }

  toggleMenu() {
    this.menuController.toggle();
  }
  
}
