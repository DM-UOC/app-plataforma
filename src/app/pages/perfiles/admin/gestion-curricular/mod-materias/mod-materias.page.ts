import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IMateria } from 'src/app/interfaces/materia.interface';
import { MateriasService } from 'src/app/services/materias/materias.service';

@Component({
  selector: 'app-mod-materias',
  templateUrl: './mod-materias.page.html',
  styleUrls: ['./mod-materias.page.scss'],
})
export class ModMateriasPage implements OnInit {

  public formMateria: FormGroup;
  public nuevaMateria: IMateria;

  constructor(
    private formBuilder: FormBuilder,
    private materiasService: MateriasService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.iniciaFormulario();
  }

  private iniciaFormulario() {
    // seteo de formulario...
    this.formMateria = this.formBuilder.group({
      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      observacion: ['', [Validators.minLength(10), Validators.maxLength(200)]]
    });
  }

  get descripcion() {
    return this.formMateria.get('descripcion');
  }
  
  get observacion() {
    return this.formMateria.get('observacion');
  }

  private async emiteCambio() {
    // emito el cambio...
    this.materiasService.actualizaListado = true;
    this.materiasService.creoMateria.emit(this.materiasService.actualizaListado); 
  }

  public async crear($event) {
    try {
      // creando el usuario...
      this.nuevaMateria = await this.materiasService.creaMateria(this.formMateria.value);
      // emite el refresco de usuarios...
      await this.emiteCambio();
      // cierra el modal...
      await this.modalController.dismiss();      
    } catch (error) {
      throw error;
    }    
  }

}
