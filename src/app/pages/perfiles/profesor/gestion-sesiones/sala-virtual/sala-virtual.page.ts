import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { IUsuarioDataSocket, IUsuarioToken } from 'src/app/interfaces/login.interface';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { SocketsService } from 'src/app/services/sockets/sockets.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { UtilitariosService } from 'src/app/services/utilitarios.service';
// peers...
import Peer from "peerjs";

@Component({
  selector: 'app-sala-virtual',
  templateUrl: './sala-virtual.page.html',
  styleUrls: ['./sala-virtual.page.scss'],
})
export class SalaVirtualPage implements OnInit {

  numeroUsuarios: number;
  token: IToken;
  private infoCliente: {
    token: IToken;
    peerId: string;
    socketId: string;
  }
  private listaClientesVivo: any [] = [];
  private peer: any = new Peer(undefined, { host: '/', port: 3001 });
  
  constructor(
    private seguridadService: SeguridadService,
    private socketsService: SocketsService,
    private router: Router
  ) {}

  ngOnInit() {
    try {
      // conectar con el socket...
      this.conectarSocket();
      // numero de usuarios...
      this.retornaNumeroUsuarios();    
      // envia el peerId al cliente...
      this.obtienePeerId();
      // emite informacion cliente...
      this.emiteInfoCliente();  
      // llamada desde...
      this.recogeLlamadaDesde();
    } catch (error) {
      throw error;
    }
  }

  ionViewDidEnter() {
  }

  private recogeLlamadaDesde() {
    this.socketsService
    .emiteLlamadaDesde()
    .subscribe((infoCliente: any) => {
      // desestructura el objeto...
      let { infoClienteDesde } = infoCliente;
      //...
      const { clienteSocketId, peerIdCliente, tokenCliente } = infoClienteDesde;
      // recogemos la inforamción del usuario del profesor...
      const infoClientePara = this.listaClientesVivo.filter(clienteDesde => this.token.usuario === clienteDesde.tokenCliente.usuario);
      // creando le objeto...
      infoClienteDesde = {
        peerIdOriginal: infoClientePara[0].peerIdCliente,
        clienteSocketId,
        peerIdCliente,
        tokenCliente: JSON.stringify(tokenCliente)
      };
      // nagegamos a la pantalla se sesion virtual...
      this.router.navigate(['/sesion-virtual', infoClienteDesde]);
    });
  }

  ionViewDidLeave() {
    this.desconectarSocket();
  }

  private conectarSocket() {
    this.socketsService.conectar();
  }

  private desconectarSocket() {
    this.socketsService.conectar();
  }

  ngOnDestroy() {
    
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
      // agrega el usuario...
      this.agregaUsuariosSesion(id);
    });

  }

  private agregaUsuariosSesion(peerId) {
    try {
      // lee  usuarios socket coneccion...
      this.token = this.seguridadService.getUsuarioToken();
      // agrega al soket la información del usuario...
      this.socketsService.servidorInfoCliente(this.token, peerId);
    } catch (error) {
      throw error;
    }
  }

  private emiteInfoCliente() {
    this.socketsService
      .emiteInfoCliente()
      .subscribe((info: any) => {
        // lista de clientes...
        this.infoCliente = info.tokenCliente
        this.listaClientesVivo = info.listaClientes;
      });
  }

  relizarVideoLLamada(clienteVivo: any) {
    // peerId del cliente a llamar...
    const { clienteSocketId, peerIdCliente, tokenCliente } = clienteVivo;
    // recogemos la inforamción del usuario del profesor...
    const infoClienteDesde = this.listaClientesVivo.filter(clienteDesde => this.token.usuario === clienteDesde.tokenCliente.usuario);
    // parametros a pasar al la sesion virtual...
    const infoClientePara = {
      peerIdOriginal: infoClienteDesde[0].peerIdCliente,
      clienteSocketId,
      peerIdCliente,
      tokenCliente: JSON.stringify(tokenCliente)
    }
    // emite la información de la llamada...
    this.socketsService.servidorLlamadaPara(infoClienteDesde[0], clienteSocketId);
    // nagegamos a la pantalla se sesion virtual...
    this.router.navigate(['/sesion-virtual', infoClientePara]);
  }

}
