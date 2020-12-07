import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ILectivo } from 'src/app/interfaces/lectivos/lectivo.interface';
import { LectivosService } from 'src/app/services/lectivos/lectivos.service';

@Component({
  selector: 'app-mod-lectivos',
  templateUrl: './mod-lectivos.page.html',
  styleUrls: ['./mod-lectivos.page.scss'],
})
export class ModLectivosPage implements OnInit {

  @Input() lectivo: ILectivo;
  public formLectivo: FormGroup;
  public nuevoLectivo: ILectivo;
  
  constructor(
    private formBuilder: FormBuilder,
    private lectivosService: LectivosService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    try {
      // inicia el formulario...
      this.iniciaFormulario();
      // verifiaca si es una actualizacion de informacion...
      this.verificaActualizaDatos();      
    } catch (error) {
      throw error;
    }
  }

  private verificaActualizaDatos() {
    try {
      // verifica si el objeto esta definido...
      if(this.lectivo !== undefined) {
        this.formLectivo.controls['fecha_inicio'].setValue(this.lectivo.fecha_inicio);
        this.formLectivo.controls['fecha_final'].setValue(this.lectivo.fecha_final);
        this.formLectivo.controls['descripcion'].setValue(this.lectivo.descripcion);
        this.formLectivo.controls['puntaje_objetivo'].setValue(this.lectivo.puntaje_objetivo);
      }
    } catch (error) {
      throw error;
    }
  }

  private iniciaFormulario() {
    // seteo de formulario...
    this.formLectivo = this.formBuilder.group({
      fecha_inicio: ['', [Validators.required]],
      fecha_final: ['', [Validators.required]],
      descripcion: ['', [Validators.minLength(5), Validators.maxLength(100)]],
      puntaje_objetivo: ['', [Validators.required, Validators.max(20)]]
    });
  }

  get fechaInicio() {
    return this.formLectivo.get('fecha_inicio');
  }
  
  get fechaFinal() {
    return this.formLectivo.get('fecha_final');
  }

  get descripcion() {
    return this.formLectivo.get('descripcion');
  }

  get puntajeObjetivo() {
    return this.formLectivo.get('puntaje_objetivo');
  }

  private async emiteCambio() {
    // emito el cambio...
    this.lectivosService.actualizaListado = true;
    this.lectivosService.creoLectivo.emit(this.lectivosService.actualizaListado); 
  }

  public async crear($event) {
    try {
      // creando el usuario...
      this.nuevoLectivo = await this.lectivosService.creaLectivo(this.formLectivo.value);
      // emite el refresco de usuarios...
      await this.emiteCambio();
      // cierra el modal...
      await this.modalController.dismiss();
    } catch (error) {
      throw error;
    }    
  }

}
