import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  listaClientes: Cliente[] = [];
  loading: boolean = false;

  constructor(private _clienteService: ClienteService, private toastr: ToastrService){

  }

  ngOnInit(): void {
      this.getListaClientes();
  }

  getListaClientes() {
    this.loading = true;
    this._clienteService.getListaClientes().subscribe((data: Cliente[]) => {
      this.listaClientes = data;
      this.loading = false;
    })
  }

  deleteCliente(codigo: string){
    
    const eliminar = confirm("¿Deseas eliminar el cliente?");
    this.loading = true;
    if (eliminar) {
      this._clienteService.deleteCliente(codigo).subscribe(() => {
        this.getListaClientes();
        this.toastr.warning("El cliente ha sido eliminado", "Cliente eliminado");
      })
    } else {
      this.loading = false;
    }

  }

}
