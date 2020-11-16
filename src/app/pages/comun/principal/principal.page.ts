import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ICatalogo } from 'src/app/interfaces/catalogo.interface';
import { MenuService } from 'src/app/services/seguridades/menu.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  
  private catalgo: ICatalogo;

  constructor(
    private menuService: MenuService,
    private seguridadService: SeguridadService,
    private menuController: MenuController
  ) { 
    this.setMenuUsuario();
  }

  private async setMenuUsuario() {
    // habilitando el menu...
    this.menuController.enable(true);    
    // recuperando los items del menu...
    this.catalgo = await this.seguridadService.retornaMenuUsuario();
    // agregando el menu del perfil...
    this.menuService.setPages(this.catalgo.arreglo1);
    // emito el cambio...
    this.menuService.actualizaMenu = true;
    this.menuService.cambioMenu.emit(this.menuService.actualizaMenu);    
  }

  async ngOnInit() {
    try {
      // 
    } catch (error) {
      throw error;
    }
  }

  toggleMenu() {
    this.menuController.toggle();
  }
  
}
