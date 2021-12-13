import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
   }

  adicionarUsuario(usuario: any){
    let usuarios = [];
    if(localStorage.getItem('Usuarios')){
      usuarios = JSON.parse(localStorage.getItem('Usuarios') || '{}');
      usuarios.push(usuario);
    }else {
      usuarios = [usuario];
    }
    localStorage.setItem('Usuarios', JSON.stringify(usuarios));
  }

}


