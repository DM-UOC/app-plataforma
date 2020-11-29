import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import { IFormatoArchivo } from 'src/app/interfaces/formato.archivo.interface';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @Input() tipoPerfil: number;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  public fileUploader: FileUploader;
  public formUsuario: FormGroup;
  public usuarios: IUsuario = [] as IUsuario;
  public nuevoUsuario: IUsuario;
  
  constructor(
    private formBuilder: FormBuilder,
    private perfilesService: PerfilesService,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController
  ) {     
  }

  async ngOnInit() {
    // inicia formulario...
    this.iniciaFormulario();
  }

  private iniciaFormulario() {
    // seteo de formulario...
    this.formUsuario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  get nombre() {
    return this.formUsuario.get('nombre');
  }

  get apellido() {
    return this.formUsuario.get('apellido');
  }

  get correo() {
    return this.formUsuario.get('correo');
  }

  private async emiteCambioUsuario() {
    // emito el cambio...
    this.perfilesService.actualizaListado = true;
    this.perfilesService.creoUsuario.emit(this.perfilesService.actualizaListado); 
  }

  public async crear($event) {
    try {
      // creando el usuario...
      this.nuevoUsuario = await this.perfilesService.creaUsuario(this.formUsuario.value, this.fileInput.nativeElement.files[0], this.tipoPerfil);
      // emite el refresco de usuarios...
      await this.emiteCambioUsuario(); 
    } catch (error) {
      throw error;
    }
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