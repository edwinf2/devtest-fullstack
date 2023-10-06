import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AddEditUsuarioComponent } from './components/add-edit-usuario/add-edit-usuario.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { AddEditClienteComponent } from './components/add-edit-cliente/add-edit-cliente.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { AddEditPedidoComponent } from './components/add-edit-pedido/add-edit-pedido.component';

const routes: Routes = [
  { path: '', component: ListaUsuariosComponent},
  { path: 'adduser', component: AddEditUsuarioComponent},
  { path: 'edituser/:codigo', component: AddEditUsuarioComponent},

  { path: 'clientes', component: ListaClientesComponent},
  { path: 'addcliente', component: AddEditClienteComponent},
  { path: 'editcliente/:codigo', component: AddEditClienteComponent},

  { path: 'pedidos', component: ListaPedidosComponent},
  { path: 'addpedido', component: AddEditPedidoComponent},
  { path: 'editpedido/:codigo', component: AddEditPedidoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} //Siempre debe ir al ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
