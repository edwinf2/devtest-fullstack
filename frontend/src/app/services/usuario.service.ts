import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor( private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/usuarios/';
   }

   //Listar usuarios
   getListaUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }

   //Guardar usuarios
   guardarUsuario(usuario: Usuario): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, usuario)
   }

   //Editar usuarios
   getUsuario(codigo: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}${codigo}`)
   }
   actualizarUsuario(codigo: string, usuario: Usuario): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${codigo}`, usuario)
   }

   //Eliminar usuario
   deleteUsuario(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${codigo}`)
   }
}
