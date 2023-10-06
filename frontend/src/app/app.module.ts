import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// Module
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AddEditUsuarioComponent } from './components/add-edit-usuario/add-edit-usuario.component';

import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { AddEditClienteComponent } from './components/add-edit-cliente/add-edit-cliente.component';

import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { AddEditPedidoComponent } from './components/add-edit-pedido/add-edit-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaUsuariosComponent,
    AddEditUsuarioComponent,
    ProgressBarComponent,
    ListaClientesComponent,
    AddEditClienteComponent,
    ListaPedidosComponent,
    AddEditPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
