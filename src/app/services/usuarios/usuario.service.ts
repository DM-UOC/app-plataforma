import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient,
    private socket: Socket
  ) { }

  obtenerUsuarios() {
    return this.socket.fromEvent('usuarios');
  }

  sendChat(message: string){
    this.socket.emit('chat', message);
  }

  receiveChat(){
    return this.socket.fromEvent('chat');
  }

  uneSesion( message: object ) {
    this.socket.emit('uneSesion', message);
  }

  dejaSesion( message: object ) {
    this.socket.emit('dejaSesion', message);
  }

  usuarioConectado() {
    return this.socket.fromEvent('usuarioConectado');
  }

  usuarioDesconectado() {
    return this.socket.fromEvent('usuarioDesconectado');
  }

}
