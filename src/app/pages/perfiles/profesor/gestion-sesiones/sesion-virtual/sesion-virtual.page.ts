import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

import moment from "moment";
import Peer from 'peerjs';

@Component({
  selector: 'app-sesion-virtual',
  templateUrl: './sesion-virtual.page.html',
  styleUrls: ['./sesion-virtual.page.scss'],
})
export class SesionVirtualPage implements OnInit {

  public usuarios: number = 0;
  public message: string = '';
  public messages: string[] = [];
  public peers = [];
  public usuarioId: string;

  constructor(
    private toastController: ToastController,
    private usuarioService: UsuarioService

  ) { }

  agregarFlujoVideo(video, stream, grid) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })
    grid.append(video);
  }

  conectarNuevoUsuario(usuarioId: string, stream, myPeer, videoGrid) {
    const that = this;
    const call = myPeer.call(usuarioId, stream);
    const video = document.createElement('video');

    call.on('stream', userVideoStream => {
      that.agregarFlujoVideo(video, userVideoStream, videoGrid);
    });

    call.on('close', () => {
      video.remove();
      alert('cerrando video sesion...');
      const message = {
        cuartoId: 1, 
        usuarioId
      };
      // socket deja sesion...
      that.usuarioService.dejaSesion(message);
    });
    
    this.peers[usuarioId] = call;
  }

  iniciaVideo() {
    const that = this;

    const myPeer = new Peer(undefined, {
      host: '/',
      port: 3026,
      secure: false
    });
    
    const videoGrid = document.getElementById('video-grid');
    const myVideo = document.createElement('video');
    myVideo.muted = true;
    // inicio usermedia...
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      // agrega el video...
      that.agregarFlujoVideo(myVideo, stream, videoGrid);
      // peer...
      myPeer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
          that.agregarFlujoVideo(video, userVideoStream, videoGrid);
        });
      });

      // agregando el nuevo usuario al grid de video...
      this.usuarioService
      .usuarioConectado()
      .subscribe((usuarioID: string) => {
        // agregando el nuevo usuario...
        that.conectarNuevoUsuario(usuarioID, stream, myPeer, videoGrid);
      });

    });

    // socket al cerrar sesion...
    this.usuarioService
    .usuarioDesconectado()
    .subscribe((usuarioID: string) => {
      // desconecta al usuario...
      if (this.peers[usuarioID]) {
        this.peers[usuarioID].close();
      }
    });

    // se crea el objeto peer enviamos el socket de unnirse a la sesion...
    myPeer.on('open', id => {
      that.usuarioId = id;
      const message = {
        cuartoId: 1, 
        usuarioId: id
      };
      // enviando el socket al servidor...
      this.usuarioService.uneSesion(message);
    });
   
  }

  ngOnInit() {
    let nombreUsuario: string = `${moment().utc().format('YYYY-MM-DD HH:mm:ss')}`;
    // retornamos el numero de usuarios conectados...
    this.usuarioService
      .obtenerUsuarios()
      .subscribe((usuarios: number) => {
        this.usuarios = usuarios;
    });

    this.usuarioService
      .receiveChat()
      .subscribe((message: string) => {
      this.messages.push(message);
    });

    // inicia el video...
    this.iniciaVideo();
  }

  addChat(){
    this.messages.push(this.message);
    this.usuarioService.sendChat(this.message);
    this.message = '';
  }

}
