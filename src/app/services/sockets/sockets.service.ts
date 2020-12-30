import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  constructor(
    private socket: Socket
  ) { }

  retornaNumeroUsuarios(){
    return this.socket.fromEvent('numero-usuarios');
  }

  enviaServidorPeerId(peerId: string) {
    this.socket.emit('envia-servidor-peerid', peerId);
  }

  emiteDatosConexion() {
    return this.socket.fromEvent('emite-datos-conexion');
  }
  
}
