import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-edit-cliente',
  templateUrl: './add-edit-cliente.component.html',
  styleUrls: ['./add-edit-cliente.component.css']
})
export class AddEditClienteComponent implements OnInit {
  formCliente: FormGroup;
  loading: boolean = false;
  codigo: string;
  operacion: string = "Agregar ";

  constructor(private fb: FormBuilder, private _clienteService: ClienteService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute){
    this.formCliente = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      edad: ['', Validators.required]
    })
    this.codigo = String(aRoute.snapshot.paramMap.get('codigo'));
  }

  ngOnInit(): void {
    if (this.codigo.length > 5) {
      this.operacion = "Editar ";
      this.getCliente(this.codigo);
      
    }
  }

  addCliente(){
    const cliente: Cliente = {
      nombre: this.formCliente.value.nombre,
      email: this.formCliente.value.email,
      edad: this.formCliente.value.edad
    }

    this.loading = true;
    if (this.codigo.length > 5){
      //Editar      
      cliente.codigo = this.codigo;
      this._clienteService.actualizarCliente(this.codigo, cliente).subscribe(() => {
        this.loading = false;
        this.toastr.info(`El cliente ${cliente.nombre} se ha actualizado`, 'Cliente actualizado');
        this.router.navigate(['/clientes']);
      });
    } else {
      //Agregar
      this._clienteService.guardarCliente(cliente).subscribe(() => {
        console.log('Cliente agregado');
        this.loading = false;
        this.toastr.success(`El cliente ${cliente.nombre} se ha registrado`, 'Cliente registrado');
        this.router.navigate(['/clientes']);
      })
    }
  }

  getCliente(codigo: string) {
    this.loading = true;
    this._clienteService.getCliente(codigo).subscribe((data: Cliente) => {
      this.loading = false;
      this.formCliente.patchValue({
        nombre: data.nombre,
        email: data.email,
        edad: data.edad
      });
    });
  }

}
