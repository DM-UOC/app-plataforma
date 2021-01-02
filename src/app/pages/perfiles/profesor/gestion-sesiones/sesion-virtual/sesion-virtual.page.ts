import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { ToastController } from '@ionic/angular';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { SocketsService } from 'src/app/services/sockets/sockets.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { IToken } from 'src/app/interfaces/comuns/token.interface';

// tensorflow...
import * as faceapi from "face-api.js";
// peers...
import Peer from "peerjs";
import { ActivatedRoute, Router } from '@angular/router';
// declare const Peer: any;

// modelos TS..
const TS_MODELS = '../../../../../../assets/models';;


@Component({
  selector: 'app-sesion-virtual',
  templateUrl: './sesion-virtual.page.html',
  styleUrls: ['./sesion-virtual.page.scss'],
})
export class SesionVirtualPage implements OnInit {

  @ViewChild('videoLocal') videoLocal: ElementRef;
  @ViewChild('videoRemoto') videoRemoto: ElementRef;

  private peerIdCliente: string;
  private peerIdOriginal: string;
  tokenCliente: any;
  private streamLocal: any;
  private streamRemoto: any;
  private listaPeers: any [] = [];
  private modelosCargados: boolean = false;

  constructor(
    private socketsService: SocketsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
  }

  async ngOnInit() {
    // información del cliente...
    await this.recogeInfoCliente();
  }

  private async recogeInfoCliente() {
    // recogiendo datos...
    this.tokenCliente = this.activatedRoute.snapshot.paramMap.get('tokenCliente');
    this.peerIdOriginal = this.activatedRoute.snapshot.paramMap.get('peerIdOriginal');
    // creamos una instancia del objeto con su peerId Original...
    const peer = new Peer(this.peerIdOriginal);
    // reconvertimos el string a JSON...
    this.tokenCliente = JSON.parse(this.tokenCliente);
    // tokenCliente...
    const { codigo_perfil } = this.tokenCliente;
    // si es el profesor... realiza la llamada
    if(codigo_perfil === 3) {
      // realiza la llamada...
      await this.realizaVideoLlamada(peer);
    }
    else if(codigo_perfil === 2) { // si es el profesor... realiza la llamada
      // realiza la llamada...
      await this.contestaVideoLlamada(peer);
    }    
  }

  private async realizaVideoLlamada(peer: any) {
    try {
      const that = this;
      
      this.peerIdCliente = this.activatedRoute.snapshot.paramMap.get('peerIdCliente');
      const conn = peer.connect(this.peerIdCliente);
      // open...
      conn.on('open', (id) => {
        console.log('+++++++++++++++++++ 0000000000');
        console.log(id);
      });
      // stream...
      this.streamLocal = await this.iniciaVideoLocal();
      // agregando el video local...
      that.agreagaVideoLocal();      
      // call...
      const call = peer.call(this.peerIdCliente, this.streamLocal);
      // agregando la llamada al stream local...
      call.on('stream', (stream) => {
        // verifica si ya existe la llamada...
        if(!that.listaPeers.includes(call.peer)) {
          // agrega el stream al remoto...
          that.agregaVideoRemoto(stream);
          // agreaga al arreglo de peers...
          that.listaPeers.push(call.peer);
        }
      });
    } catch (error) {
      throw error;
    }
  }

  private async contestaVideoLlamada(peer: any) {
    const that = this;
    // stream...
    this.streamLocal = await this.iniciaVideoLocal();
    // agregando el video local...
    that.agreagaVideoLocal();         
    // llamada
    peer.on('call', (call) => {
      // contestando la llamada..
      call.answer(that.streamLocal);
      // colocalndo el stream al remoto...
      call.on('stream', (stream) => {
        // verifica si ya existe la llamada...
        if(!that.listaPeers.includes(call.peer)) {
          // agrega el video remoto...
          that.agregaVideoRemoto(stream);
          // agreaga al arreglo de peers...
          that.listaPeers.push(call.peer);
        }
      });
    });
  }

  private agreagaVideoLocal() {
    // agregando el stream
    this.videoLocal.nativeElement.srcObject = this.streamLocal;
    // play...
    this.videoLocal.nativeElement.play();
  }

  private agregaVideoRemoto(stream) {
    // agregando el stream
    this.videoRemoto.nativeElement.srcObject = stream;
    // play...
    this.videoRemoto.nativeElement.play();
  }

  private async iniciaVideoLocal() {
    const that = this;
    // media divices...
    return await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  }

  private async cargaModelos() {
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri(TS_MODELS);
      await faceapi.nets.faceLandmark68Net.loadFromUri(TS_MODELS);
      await faceapi.nets.faceRecognitionNet.loadFromUri(TS_MODELS);
      await faceapi.nets.faceExpressionNet.loadFromUri(TS_MODELS);
      await faceapi.nets.ageGenderNet.loadFromUri(TS_MODELS);      
    } catch (error) {
      throw error;
    }
  }

  async initPrediction() {    
    try {
      // bandera para cargar una sola vez los modelos...
      if(!this.modelosCargados) {
        // cargando modelos...
        await this.cargaModelos();
        // cambiando la bandera a true...
        this.modelosCargados = true;
      }

      // recogiendo el video remoto...
      const video: HTMLVideoElement = this.videoRemoto.nativeElement;
      // canvas...
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;

      // dimensiones...          
      const displaySize = {
        width: video.width,
        height: video.height
      };

      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
            
        const predictions = await faceapi.detectAllFaces(video, 
        new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
        
        console.log(predictions);

        const resizePredictions = faceapi.resizeResults(predictions, displaySize);
      
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      
        faceapi.draw.drawDetections(canvas, resizePredictions);
      
        faceapi.draw.drawFaceLandmarks(canvas, resizePredictions);
    
        faceapi.draw.drawFaceExpressions(canvas, resizePredictions);
      }, 100);      
    } catch (error) {
      throw error;
    }
  }

}
