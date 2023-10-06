import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/pedidos/';
  }
  //Listar pedidos
  getListaPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  //Guardar pedidos
  guardarPedido(pedido: Pedido): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, pedido)
  }

  //Editar pedidos
  getPedido(codigo: string): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.myAppUrl}${this.myApiUrl}${codigo}`)
  }
  actualizarPedido(codigo: string, pedido: Pedido): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${codigo}`, pedido)
  }

  //Eliminar pedidos
  deletePedido(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${codigo}`)
  }



}
