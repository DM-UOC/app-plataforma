import { Component, Input, OnInit } from '@angular/core';
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

  @Input() materia: IMateria;
  public formMateria: FormGroup;
  public nuevaMateria: IMateria;

  constructor(
    private formBuilder: FormBuilder,
    private materiasService: MateriasService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    // inicia formulario...
    this.iniciaFormulario();
    // verifiaca si es una actualizacion de informacion...
    this.verificaActualizaDatos();
  }

  private verificaActualizaDatos() {
    try {
      // verifica si el objeto esta definido...
      if(this.materia !== undefined) {
        this.formMateria.controls['descripcion'].setValue(this.materia.descripcion);
        this.formMateria.controls['observacion'].setValue(this.materia.observacion);
      }
    } catch (error) {
      throw error;
    }
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
      // verificando la opcion a ejecutar...
      if(!this.materia) {
        // creando el usuario...
        this.nuevaMateria = await this.materiasService.creaMateria(this.formMateria.value);
      }
      else {
        // actualiza la materia...
        this.materiasService.actualizaMateria(this.formMateria.value, this.materia)
        .subscribe(materia => {
          this.nuevaMateria = materia;
        });
      }
      // emite el refresco de usuarios...
      await this.emiteCambio();
      // cierra el modal...
      await this.modalController.dismiss();      
    } catch (error) {
      throw error;
    }    
  }

}
