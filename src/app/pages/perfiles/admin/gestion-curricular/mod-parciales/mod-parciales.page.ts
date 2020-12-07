import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ILectivo } from 'src/app/interfaces/lectivos/lectivo.interface';
import { IParcial } from 'src/app/interfaces/lectivos/parcial.interface';
import { LectivosService } from 'src/app/services/lectivos/lectivos.service';

@Component({
  selector: 'app-mod-parciales',
  templateUrl: './mod-parciales.page.html',
  styleUrls: ['./mod-parciales.page.scss'],
})
export class ModParcialesPage implements OnInit {

  @Input() lectivo: ILectivo;
  public formParcial: FormGroup;
  public nuevoParcial: ILectivo;
  
  constructor(
    private formBuilder: FormBuilder,
    private lectivosService: LectivosService,
    private modalController: ModalController    
  ) { }

  async ngOnInit() {
    try {
      // inicia el formulario...
      this.iniciaFormulario();
    } catch (error) {
      throw error;
    }    
  }

  private retornaUltimaFecha(campoFechaInicio: string, campoFechaFinal: string) {
    // verifica si el objeto parciales tiene datos...
    if(this.lectivo.parciales.length === 0) {
      this.formParcial.controls[campoFechaInicio].setValue(this.lectivo[campoFechaInicio]);
      this.formParcial.controls[campoFechaFinal].setValue(this.lectivo[campoFechaFinal]);
    }
    else {
      this.formParcial.controls[campoFechaInicio].setValue(this.lectivo.parciales[(this.lectivo.parciales.length - 1)][campoFechaFinal]);
    }
  }

  private iniciaFormulario() {
    // seteo de formulario...
    this.formParcial = this.formBuilder.group({
      fecha_inicio: ['', [Validators.required]],
      fecha_final: ['', [Validators.required]],
      descripcion: ['', [Validators.minLength(5), Validators.maxLength(100)]],
      puntaje_objetivo: ['', [Validators.required, Validators.max(20)]]
    });
    // seteando valores tipo fecha...
    this.retornaUltimaFecha('fecha_inicio', 'fecha_final');
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

  private async emiteCambio() {
    // emito el cambio...
    this.lectivosService.actualizaListado = true;
    this.lectivosService.creoLectivo.emit(this.lectivosService.actualizaListado); 
  }

  public async crear($event) {
    try {
      this.lectivo.parciales.push(this.formParcial.value);
      // creando el parcial...
      this.nuevoParcial = await this.lectivosService.creaParcial(this.lectivo);
      // emite el refresco de usuarios...
      await this.emiteCambio();
      // cierra el modal...
      await this.modalController.dismiss();
    } catch (error) {
      throw error;
    }    
  }

}
