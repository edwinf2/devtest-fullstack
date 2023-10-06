import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/clientes/';
   }

   //Listar clientes
   getListaClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }

   //Guardar clientes
   guardarCliente(cliente: Cliente): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, cliente)
   }

   //Editar clientes
   getCliente(codigo: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.myAppUrl}${this.myApiUrl}${codigo}`)
   }
   actualizarCliente(codigo: string, cliente: Cliente): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${codigo}`, cliente)
   }

   //Eliminar clientes
   deleteCliente(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${codigo}`)
   }
}
