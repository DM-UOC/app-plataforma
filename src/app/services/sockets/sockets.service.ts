import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IToken } from 'src/app/interfaces/comuns/token.interface';

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

  servidorInfoCliente(token: IToken, peerId: string) {
    // objeto a enviar...
    const message = {
      token,
      peerId
    };
    // envia al servidor...
    this.socket.emit('infoCliente', message);
  }

  emiteInfoCliente() {
    return this.socket.fromEvent('emiteInfoCliente');
  }

  enviaServidorPeerId(peerId: string) {
    this.socket.emit('envia-servidor-peerid', peerId);
  }

  emiteDatosConexion() {
    return this.socket.fromEvent('emite-datos-conexion');
  }
  
  enviaRealizarLlamada(llamadaDe: any, llamadaPara: any) {
    const message = {
      llamadaDe,
      llamadaPara
    };
    this.socket.emit('emitVideoLlamada', message);
  }

  servidorLlamadaPara(infoClienteDesde: any, clienteSocketId: string) {
    const message = {
      infoClienteDesde,
      clienteSocketId
    };
    // envia al servidor...
    this.socket.emit('llamadaPara', message);
  }

  emiteLlamadaDesde() {
    return this.socket.fromEvent('llamadaDesde');
  }

  desconectar() {
    this.socket.disconnect()
  }

  conectar() {
    this.socket.connect();
  }
}
