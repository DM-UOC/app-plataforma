import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILectivo } from 'src/app/interfaces/lectivos/lectivo.interface';
import { IParcial } from 'src/app/interfaces/lectivos/parcial.interface';
import { LectivosService } from 'src/app/services/lectivos/lectivos.service';

@Component({
  selector: 'app-mod-parciales-detalle',
  templateUrl: './mod-parciales-detalle.page.html',
  styleUrls: ['./mod-parciales-detalle.page.scss'],
})
export class ModParcialesDetallePage implements OnInit {

  @Input() lectivo: ILectivo;
  @Input() parcial: IParcial;
  public formParcial: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private lectivosService: LectivosService,
  ) { 
   
  }

  async ngOnInit() {
    try {
      console.log(this.lectivo);
      // inicia el formulario...
      this.iniciaFormulario();
      this.actualizaFormulario();
    } catch (error) {
      throw error;
    }    
  }

  private actualizaFormulario() {
    // verifica si el objeto parciales tiene datos...
    this.formParcial.controls['fecha_inicio'].setValue(this.parcial.fecha_inicio);
    this.formParcial.controls['fecha_final'].setValue(this.parcial.fecha_final);
    this.formParcial.controls['descripcion'].setValue(this.parcial.descripcion);
    this.formParcial.controls['puntaje_objetivo'].setValue(this.parcial.puntaje_objetivo);
  }

  get fechaInicio() {
    return this.formParcial.get('fecha_inicio');
  }
  
  get fechaFinal() {
    return this.formParcial.get('fecha_final');
  }

  get descripcion() {
    return this.formParcial.get('descripcion');
  }

  get puntajeObjetivo() {
    return this.formParcial.get('puntaje_objetivo');
  }

  private iniciaFormulario() {
    try {
      // seteo de formulario...
      this.formParcial = this.formBuilder.group({
        fecha_inicio: ['', [Validators.required]],
        fecha_final: ['', [Validators.required]],
        descripcion: ['', [Validators.minLength(5), Validators.maxLength(100)]],
        puntaje_objetivo: ['', [Validators.required, Validators.max(20)]]
      });
    } catch (error) {
      throw error;
    }
  }

  public async crear($event) {
    try {
      // creando el parcial...
      await this.lectivosService.actualizaParcial(this.parcial);
      // emite el refresco de usuarios...
      // await this.emiteCambio();
      // cierra el modal...
      // await this.modalController.dismiss();
    } catch (error) {
      throw error;
    }    
  }  

}
