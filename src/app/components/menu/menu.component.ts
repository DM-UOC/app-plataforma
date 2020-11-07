import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private menuController: MenuController,
    private seguridadService: SeguridadService
  ) { }

  ngOnInit() {}

  public logout() {
    this.menuController.enable(false);
    this.seguridadService.logout();
  }

}
