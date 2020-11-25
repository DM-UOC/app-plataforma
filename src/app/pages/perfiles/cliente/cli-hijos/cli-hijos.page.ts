import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import { FileUploader } from 'ng2-file-upload';
import { IUsuario } from 'src/app/interfaces/login.interface';
import { ClientesService } from 'src/app/services/perfiles/clientes/clientes.service';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';

@Component({
  selector: 'app-cli-hijos',
  templateUrl: './cli-hijos.page.html',
  styleUrls: ['./cli-hijos.page.scss'],
})
export class CliHijosPage implements OnInit {

  @Input() tipoPerfil: number;
  @Input() representante: any;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  
  public fileUploader: FileUploader;
  public formUsuario: FormGroup;
  public usuarios: IUsuario = [] as IUsuario;
  public nuevoUsuario: IUsuario;
  
  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.inicioFormulario();
    this.clientesService.setRepresentante(this.representante);
  }

  private inicioFormulario() {
    // seteo de formulario...
    this.formUsuario = this.formBuilder.group({
      representante_id: [this.representante._id, null],
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
      // creando el usuario...
      this.nuevoUsuario = await this.clientesService.crearHijo(this.formUsuario.value, this.fileInput.nativeElement.files[0]);
      // emite el refresco de usuarios...
      await this.emiteCambioUsuario();
      // cerramos el modal...
      this.cerrarModal();
    } catch (error) {
      throw error;
    }
    $event.preventDefault();
  }
  
  private async retornaOpciones() {
    const buttons = [
      {
        text: 'Toma una foto..',
        icon: 'camera',
        handler: () => {
          this.cargaImagenNativa(CameraSource.Camera);
        }
      },
      {
        text: 'Seleccione un archivo...',
        icon: 'image',
        handler: () => {
          this.cargaImagenNativa(CameraSource.Photos);
        }
      }
    ];
 
    // Only allow file selection inside a browser
    if (!this.platform.is('hybrid')) {
      buttons.push({
        text: 'Seleccione el archivo...',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
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

  cargaImagenNavegador(eventTarget: EventTarget) {
    const eventObj: MSInputMethodContext = event as unknown as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];
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
    
}
