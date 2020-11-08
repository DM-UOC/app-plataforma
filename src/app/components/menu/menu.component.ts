import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ICatalogo } from 'src/app/interfaces/catalogo.interface';
import { IMenu } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/services/menu.service';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public pages: IMenu;
  
  constructor(
    private menuService: MenuService,
    private menuController: MenuController,
    private seguridadService: SeguridadService
  ) { 
    
  }

  async ngOnInit() {
    this.menuService.cambioMenu.subscribe((result: boolean) => {
      // se emitio el cambio...
      if(result) {
        // actualizando el menu...
        this.pages = this.menuService.getPages();
      }
    })
  }

  public logout() {
    this.menuController.enable(false);
    this.seguridadService.logout();
  }

}
