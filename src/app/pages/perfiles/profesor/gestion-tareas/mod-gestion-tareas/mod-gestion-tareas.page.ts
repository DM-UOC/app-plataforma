import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ITarea } from 'src/app/interfaces/tareas/tarea.interface';
import { TareasService } from 'src/app/services/tareas/tareas.service';

import moment from "moment";
import { IToken } from 'src/app/interfaces/comuns/token.interface';

@Component({
  selector: 'app-mod-gestion-tareas',
  templateUrl: './mod-gestion-tareas.page.html',
  styleUrls: ['./mod-gestion-tareas.page.scss'],
})
export class ModGestionTareasPage implements OnInit {

  @Input() tarea: ITarea;
  @Input() profesor: IToken;
  
  public formTarea: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private tareasService: TareasService
  ) { }

  ngOnInit() {
    // inicia el formulario...
    this.inicioFormulario();
    // verifiaca si es una actualizacion de informacion...
    this.verificaActualizaDatos();          
  }

  private verificaActualizaDatos() {
    try {
      // verifica si el objeto esta definido...
      if(this.tarea !== undefined) {
        // recuperando datos...
        this.formTarea.controls['descripcion'].setValue(this.tarea.descripcion);
        this.formTarea.controls['observacion'].setValue(this.tarea.observacion);
        this.formTarea.controls['fecha_entrega'].setValue(this.tarea.fecha_entrega);
      }
    } catch (error) {
      throw error;
    }
  }

  private verificaFechas(grupo: FormGroup) {
    try {
      ///TODO: Implement some better validation logic
      let fecha_actual = moment().utc().format('YYYY-MM-DD');
      let fecha_entrega = grupo.get('fecha_entrega').value;
      // verificando que tenga datos para validar...
      if(fecha_actual.length > 0 && fecha_entrega.length > 0) {
        // verificando si hay error...
        const invalid = fecha_actual > fecha_entrega;
        // retornando si existe error...
        return invalid ? { 'fechaInicioFinalIncorrectas': true } : null;
      }
      // retornando null...
      return null;
    } catch (error) {
      throw error;
    }
  }

  private inicioFormulario() {
    // seteo de formulario...
    this.formTarea = this.formBuilder.group({
      descripcion: ['', [Validators.required, Validators.maxLength(100)]],
      observacion: ['', [Validators.maxLength(200)]],
      fecha_entrega: ['', [Validators.required]]
    },  {
      validators: [this.verificaFechas]
    });    
  }

  get descripcion() {
    return this.formTarea.get('descripcion');
  }

  get observacion() {
    return this.formTarea.get('observacion');
  }

  get fechaEntrega() {
    return this.formTarea.get('fecha_entrega');
  }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

  public async crear($event) {
    try {
      // verificando la opcion a ejecutar...
      if(!this.tarea) {
        // creando el usuario...
        this.tareasService.crearTarea(this.formTarea.value, this.profesor)
        .subscribe(tarea => this.tarea = tarea);
      }
      else {
        // actualiza la materia...
        this.tareasService.actualizaTarea(this.formTarea.value, this.tarea)
        .subscribe(tarea => {
          this.tarea = tarea;
        });
      }
      // emite el refresco de usuarios...
      await this.emiteCambio();
      // cierra el modal...
      await this.cerrarModal();
    } catch (error) {
      throw error;
    }    
  }

  private async emiteCambio() {
    // emito el cambio...
    this.tareasService.actualizaListado = true;
    this.tareasService.creoTarea.emit(this.tareasService.actualizaListado); 
  }

}
