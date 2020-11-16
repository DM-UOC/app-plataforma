import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public async getUsuarios() {
    try {
      
    } catch (error) {
      throw error;
    }
  }
}
