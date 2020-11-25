import { EventEmitter, Injectable, Output } from '@angular/core';
import { Storage } from '@ionic/storage';
import { STORAGE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private pages: any;
  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaMenu = false;
  @Output() cambioMenu: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private storage: Storage
  ) { }

  async setPages(pages: any) {
    this.pages = JSON.stringify(pages);
    // almacenando el token...
    await this.storage.set(STORAGE.MENU.KEY, this.pages);
  }
  
  async getPages() {
    this.pages = await this.storage.get(STORAGE.MENU.KEY);
    // return...
    return JSON.parse(this.pages);
  }
  
}
