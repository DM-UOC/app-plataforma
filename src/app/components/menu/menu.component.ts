import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IMenu } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/services/seguridades/menu.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';

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
    private seguridadService: SeguridadService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    // emite cambio...
    this.verificaEmiteCambioMenu();
    // verifica si actualizo la pagina...
    this.verificaRefrescoPagina();    
  }

  private verificaEmiteCambioMenu() {
    // verificando emite...
    this.menuService.cambioMenu.subscribe(async (result: boolean) => {
      // se emitio el cambio...
      if(result) {
        // actualizando el menu...
        this.pages = await this.menuService.getPages();
      }
    });
  }

  private verificaRefrescoPagina() {
    // verifica si actualiza la pagina...
    this.router
    .events
    .subscribe(
      async (event: any) => {
        if(event.id === 1 
        && event.url === event.urlAfterRedirects) {
          // actualizando el menu...
          this.pages = await this.menuService.getPages();
        }
      }
    )
  }

  public async logout() {
    this.menuController.enable(false);
    await this.seguridadService.logout();
  }

}
