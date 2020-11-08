import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private pages: any;
  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  actualizaMenu = false;
  @Output() cambioMenu: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  setPages(pages: any) {
    this.pages = pages;
  }
  
  getPages() {
    return this.pages;
  }
  
}
