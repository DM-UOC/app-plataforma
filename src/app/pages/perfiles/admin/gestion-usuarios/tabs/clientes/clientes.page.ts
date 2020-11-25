import { Component, OnInit } from '@angular/core';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  public usuarios: any = [];

  constructor(
    private perfilesService: PerfilesService
  ) { }

  async ngOnInit() {
    await this.retornaUsuarios()
  }

  private async retornaUsuarios() {
    this.usuarios = await this.perfilesService.retornaUsuarios(3);
  }

}
