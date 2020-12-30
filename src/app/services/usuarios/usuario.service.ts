import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { IUsuarioToken } from 'src/app/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private connected = false;

  constructor(
    private httpClient: HttpClient,
    private socket: Socket
  ) { }


  agregarUsuario(token: IToken) {
    // emite agrega usuario...
    this.socket.emit('agrega-usuario', token);
  }

  registroUsuario() {
    return this.socket.fromEvent('registro-usuario');
  }

  sendChat(message){
    this.socket.emit('chat', message);
  }

  receiveChat(){
    return this.socket.fromEvent('chat');
  }

  getUsers(){
    return this.socket.fromEvent('usuarios');
  }

  desconectar() {
    this.socket.disconnect();
  }
  
  retornaUsuariosConetados() {
    return new Observable((observer) => {
        this.socket.on('client-list', (data) => {
            observer.next(data);
        });
    });
  }

  public retornaUsuariosOcupados() {
    this.socket.emit('get-busy-user');
    return Observable.create((observer) => {
        this.socket.on('get-busy-user', (data) => {
            observer.next(data);
        });
    });
  }

  public realizarVideoLlamada(usuarioLlama: IUsuarioToken, usuarioALlamar: IUsuarioToken) {
    this.socket.emit('video-llamada', {
        usuarioLlama,
        usuarioALlamar
    });
  }

  accionVideoLlamada() {
    return this.socket.fromEvent('video-llamada');
  }
}
