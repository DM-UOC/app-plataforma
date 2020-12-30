import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { SocketsService } from 'src/app/services/sockets/sockets.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import Peer from "peerjs";
// declare const Peer: any;

@Component({
  selector: 'app-sesion-virtual',
  templateUrl: './sesion-virtual.page.html',
  styleUrls: ['./sesion-virtual.page.scss'],
})
export class SesionVirtualPage implements OnInit {

  @ViewChild('videoLocal') videoLocal: ElementRef;
  @ViewChild('videoRemoto') videoRemoto: ElementRef;

  numeroUsuarios: number;
  private peerId: string;
  private datosConexion: {
    socketId: string;
    peerId: string;
  };
  private peer: any = new Peer(undefined, { host: '/', port: 3001 });
  private listaPeers: any [] = [];
  private streamLocal: any;

  constructor(
    private socketsService: SocketsService,
  ) {
  }
  
  ngOnInit() {
    // numero de usuarios...
    this.retornaNumeroUsuarios();
    // obtiene el peerid del cliente...
    this.obtienePeerId();
    // recibe datos conexion...
    this.retornaDatosConexion();
  }
  
  private retornaNumeroUsuarios() {
    this.socketsService
      .retornaNumeroUsuarios()
      .subscribe((numeroUsuarios: number) => this.numeroUsuarios = numeroUsuarios)
  }

  private obtienePeerId() {
    const that = this;
    // abriendo la conexion peer...
    this.peer.on('open', (id) => {
      that.peerId = id;
      // emitiendo el id a los usuarios conectados...
      that.socketsService.enviaServidorPeerId(this.peerId);
    });
    // llamada
    this.peer.on('call', (llamada) => {
      navigator
        .mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })
        .then((stream) => {
          that.streamLocal = stream;
          // agregando el video local...
          that.agreagaVideoLocal(stream);
          // contestanto llamada...
          llamada.answer(stream);
          // stream...
          llamada.on('stream', (remoteStream) => {
            // verifica si ya existe la llamada...
            if(!that.listaPeers.includes(llamada.peer)) {
              that.agregaVideoRemoto(remoteStream);
              // agreaga al arreglo de peers...
              that.listaPeers.push(llamada.peer);
            }
          });
        })
        .catch((error) => {
          console.log(`Error al conectar con el dispositivo: ${error}`);
        })
    });
  }

  private retornaDatosConexion() {
    this.socketsService
      .emiteDatosConexion()
      .subscribe((datosConexion: any) => {
        // obtiene la conexion...
        this.datosConexion = datosConexion;
        this.realizarVideoLLamadaCliente();
      });
  }

  private realizarVideoLLamadaCliente() {
    const that = this;
    // media divices...
    navigator
      .mediaDevices
      .getUserMedia({
        video: true,
        audio: true
      })
      .then((stream) => {
        that.streamLocal = stream;
        // agregando el video local...
        that.agreagaVideoLocal(stream);
        // realizando la llamada...
        let llamada = that.peer.call(that.datosConexion.peerId, stream);
        // enviando el stream...
        llamada.on('stream', (remoteStream) => {
          // verifica si ya existe la llamada...
          if(!that.listaPeers.includes(llamada.peer)) {
            that.agregaVideoRemoto(remoteStream);
            // agreaga al arreglo de peers...
            that.listaPeers.push(llamada.peer);
          }
        });
      })
      .catch((error) => {
        console.log(`Error al conectar con el dispositivo: ${error}`);
      });
  }

  private agregaVideoRemoto(stream) {
    // agregando el stream
    this.videoRemoto.nativeElement.srcObject = stream;
    // play...
    this.videoRemoto.nativeElement.play();
  }

  private agreagaVideoLocal(stream) {
    // agregando el stream
    this.videoLocal.nativeElement.srcObject = stream;
    // play...
    this.videoLocal.nativeElement.play();
  }

}
