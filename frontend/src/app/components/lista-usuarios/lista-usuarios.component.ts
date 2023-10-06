import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listaUsuarios: Usuario[] = [];
  loading: boolean = false;

  constructor(private _usuarioService: UsuarioService, private toastr: ToastrService){

  }

  ngOnInit(): void {
      this.getListaUsuarios();
  }

  getListaUsuarios() {
    this.loading = true;
    this._usuarioService.getListaUsuarios().subscribe((data: Usuario[]) => {
      this.listaUsuarios = data;  
      this.loading = false; 
    })
  }

  deleteUsuario(codigo: string){
    
    const eliminar = confirm("¿Deseas eliminar el usuario?");
    this.loading = true;
    if (eliminar) {
      this._usuarioService.deleteUsuario(codigo).subscribe(() => {
        this.getListaUsuarios();
        this.toastr.warning("El usuario ha sido eliminado", "Usuario eliminado");
      })
    } else {
      this.loading = false;
    }

  }

}
