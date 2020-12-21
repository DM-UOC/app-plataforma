import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import { FileUploader } from 'ng2-file-upload';
import { IHijo } from 'src/app/interfaces/hijo.interface';
import { IUsuario } from 'src/app/interfaces/login.interface';
import { ClientesService } from 'src/app/services/perfiles/clientes/clientes.service';

@Component({
  selector: 'app-mod-hijos',
  templateUrl: './mod-hijos.page.html',
  styleUrls: ['./mod-hijos.page.scss'],
})
export class ModHijosPage implements OnInit {

  @Input() tipoPerfil: number;
  @Input() representante: IUsuario;
  @Input() hijo: IHijo;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  
  public fileUploader: FileUploader;
  public formUsuario: FormGroup;
  public usuarios: IUsuario = [] as IUsuario;
  public nuevoUsuario: IUsuario;
  public ocultaId: boolean = true;
  private file: File;

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController
  ) { }

  private inicioFormulario() {
    // seteo de formulario...
    this.formUsuario = this.formBuilder.group({
      representante_id: [this.representante._id, null],
      _id: [null, null],
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      fecha_nacimiento: ['', [Validators.required]]
    });    
  }
  
  get nombre() {
    return this.formUsuario.get('nombre');
  }

  get apellido() {
    return this.formUsuario.get('apellido');
  }

  get fechaNacimiento() {
    return this.formUsuario.get('fecha_nacimiento');
  }
  
  private async emiteCambioUsuario() {
    // emito el cambio...
    this.clientesService.actualizaListado = true;
    this.clientesService.creoUsuario.emit(this.clientesService.actualizaListado); 
  }

  private cerrarModal() {
    this.modalController.dismiss({
      representante: this.representante
    });
  }
  
  public async crear($event) {
    try {
      // verificando la opcion a ejecutar...
      if(!this.hijo) {
        // creando el usuario...
        this.nuevoUsuario = await this.clientesService.crearHijo(this.formUsuario.value, this.file);
      }
      else {
        // actualiza la materia...
        this.clientesService.actualizaHijo(this.formUsuario.value, this.hijo, this.file)
        .subscribe(usuario => {
          this.nuevoUsuario = usuario;
        });
      }      
      // emite el refresco de usuarios...
      await this.emiteCambioUsuario();
      // cerramos el modal...
      this.cerrarModal();
    } catch (error) {
      throw error;
    }
    $event.preventDefault();
  }
  
  private recogeEnventoArchivo() {
    this.fileInput.nativeElement.click();
  }

  private async retornaOpciones() {
    const buttons = [];

    // verificando si es nativo...
    if (this.platform.is('hybrid')) {
      buttons.push({
          text: 'Toma una foto..',
          icon: 'camera',
          handler: () => {
            // this.cargaImagenNativa(CameraSource.Camera);
            this.recogeEnventoArchivo();
          }
          },  {
          text: 'Seleccione un archivo...',
          icon: 'image',
          handler: () => {
            // this.cargaImagenNativa(CameraSource.Photos);
            this.recogeEnventoArchivo();
          }
      });
    }
    // verifica si está en el navegador...
    if (!this.platform.is('hybrid')) {
      buttons.push({
        text: 'Seleccione el archivo...',
        icon: 'attach',
        handler: () => {
          this.recogeEnventoArchivo();
        }
      });
    }
    // controlador de accion...   
    const actionSheet = await this.actionSheetController.create({
      header: 'Carga de archivo',
      buttons
    });
    // presentando el controlador...
    await actionSheet.present();
  }

  public async cargaImagenNativa(cameraSource: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: cameraSource
    });
 
    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
    const imageName = 'Give me a name';
  }

  cargaImagen($event) {
    // recoge la información dela archivo...
    this.file = $event.target.files[0];
  }

  private b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
 
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
 
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
 
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
 
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  public async seleccionaArchivo() {
    await this.retornaOpciones();
  }
    
  private verificaActualizaDatos() {
    try {
      // verifica si el objeto esta definido...
      if(this.hijo !== undefined) {
        // setea los valores...
        this.formUsuario.controls['_id'].setValue(this.hijo._id);
        this.formUsuario.controls['nombre'].setValue(this.hijo.nombre);
        this.formUsuario.controls['apellido'].setValue(this.hijo.apellido);
        this.formUsuario.controls['fecha_nacimiento'].setValue(this.hijo.fecha_nacimiento);
      }
    } catch (error) {
      throw error;
    }
  }

  ngOnInit() {
    // inicia formulario...
    this.inicioFormulario();
    // verifiaca si es una actualizacion de informacion...
    this.verificaActualizaDatos();    
    this.clientesService.setRepresentante(this.representante);    
  }

}
