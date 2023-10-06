import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent implements OnInit {
  listaPedidos: Pedido[] = [];
  loading: boolean = false;

  constructor(
    private _pedidoService: PedidoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getListaPedidos();
  }

  getListaPedidos() {
    this.loading = true;
    this._pedidoService.getListaPedidos().subscribe((data: Pedido[]) => {
      this.listaPedidos = data;
      this.loading = false;
    });
  }

  deletePedido(codigo: string){
    
    const eliminar = confirm("¿Deseas eliminar el pedido?");
    this.loading = true;
    if (eliminar) {
      this._pedidoService.deletePedido(codigo).subscribe(() => {
        this.getListaPedidos();
        this.toastr.warning("El pedido ha sido eliminado", "Pedido eliminado");
      })
    } else {
      this.loading = false;
    }

  }

}
