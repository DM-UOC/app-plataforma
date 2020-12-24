import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ISesion } from 'src/app/interfaces/sesiones/sesion.interface';
import moment from "moment";
import { SesionesService } from 'src/app/services/sesiones/sesiones.service';

@Component({
  selector: 'app-mod-sesiones',
  templateUrl: './mod-sesiones.page.html',
  styleUrls: ['./mod-sesiones.page.scss'],
})
export class ModSesionesPage implements OnInit {

  @Input()sesion: ISesion;
  @Input()usuario: string;
  public nuevaSesion: ISesion;

  public formSesion: FormGroup;
  public ocultaInfo: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private sesionesService: SesionesService
  ) { }

  ngOnInit() {
    try {
      // inicia formulario...
      this.inicioFormulario();
    // verifiaca si es una actualizacion de informacion...
    this.verificaActualizaDatos();      
    } catch (error) {
      throw error;
    }
  }

  private verificaActualizaDatos() {
    try {
      // verifica si el objeto esta definido...
      if(this.sesion !== undefined) {
        // recuperando datos...
        this.formSesion.controls['descripcion'].setValue(this.sesion.descripcion);
        this.formSesion.controls['observacion'].setValue(this.sesion.observacion);
        this.formSesion.controls['fecha_hora_inicio'].setValue(this.sesion.fecha_hora_inicio);
        this.formSesion.controls['fecha_hora_final'].setValue(this.sesion.fecha_hora_final);
      }
    } catch (error) {
      throw error;
    }
  }

  private inicioFormulario() {
    // seteo de formulario...
    this.formSesion = this.formBuilder.group({
      descripcion: ['', [Validators.required, Validators.maxLength(30)]],
      observacion: ['', [Validators.required, Validators.maxLength(30)]],
      fecha_hora_inicio: ['', [Validators.required]],
      fecha_hora_final: ['', [Validators.required]]
    }, {
      validators: [this.verificaFechas]
    });
  }

  verificaFechas(grupo: FormGroup) {
    try {
      ///TODO: Implement some better validation logic
      let fecha_hora_inicio = grupo.get('fecha_hora_inicio').value;
      let fecha_hora_final = grupo.get('fecha_hora_final').value;
      // verificando que tenga datos para validar...
      if(fecha_hora_inicio.length > 0 && fecha_hora_final.length > 0) {
        // verificando si hay error...
        const invalid = fecha_hora_inicio > fecha_hora_final;
        // retornando si existe error...
        return invalid ? { 'fechaInicioFinalIncorrectas': true } : null;
      }
      // retornando null...
      return null;
    } catch (error) {
      throw error;
    }
  }

  get descripcion() {
    return this.formSesion.get('descripcion');
  }

  get observacion() {
    return this.formSesion.get('observacion');
  }

  get fechaHoraInicio() {
    return this.formSesion.get('fecha_hora_inicio');
  }

  get fechaHoraFinal() {
    return this.formSesion.get('fecha_hora_final');
  }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

  public async crear($event) {
    try {
      // verificando la opcion a ejecutar...
      if(!this.sesion) {
        // creando el usuario...
        this.sesionesService.crearSesion(this.usuario, this.formSesion.value)
        .subscribe(sesion => this.nuevaSesion = sesion);
      }
      else {
        // actualiza la materia...
        this.sesionesService.actualizarSesion(this.formSesion.value, this.sesion)
        .subscribe(sesion => {
          this.nuevaSesion = sesion;
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
    this.sesionesService.actualizaListado = true;
    this.sesionesService.creoSesion.emit(this.sesionesService.actualizaListado); 
  }

}
