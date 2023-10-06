import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-add-edit-pedido',
  templateUrl: './add-edit-pedido.component.html',
  styleUrls: ['./add-edit-pedido.component.css']
})
export class AddEditPedidoComponent implements OnInit {
  formPedido: FormGroup;
  loading: boolean = false;
  codigo: string;
  operacion: string = "Agregar ";
  total: number = 0;

  constructor(private fb: FormBuilder, private _pedidoService: PedidoService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute){
    this.formPedido = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      total: ['', Validators.required],
      imagen: '',
    })
    this.codigo = String(aRoute.snapshot.paramMap.get('codigo'));
  }

  ngOnInit(): void {
    if (this.codigo.length > 5) {
      this.operacion = "Editar ";
      this.getPedido(this.codigo);
      
    }
   
  }

  addPedido(){
    const pedido: Pedido = {
      nombre: this.formPedido.value.nombre,
      descripcion: this.formPedido.value.descripcion,
      precio: this.formPedido.value.precio,
      cantidad: this.formPedido.value.cantidad,
      total: this.formPedido.value.precio * this.formPedido.value.cantidad,
      imagen: this.formPedido.value.imagen,      
    }

    this.loading = true;
    
    if (this.codigo.length > 5){
      //Editar      
      pedido.codigo = this.codigo;
      this._pedidoService.actualizarPedido(this.codigo, pedido).subscribe(() => {
        this.loading = false;
        this.toastr.info(`El pedido ${pedido.nombre} se ha actualizado`, 'Pedido actualizado');
        this.router.navigate(['/pedidos']);
      });
    } else {
      //Agregar
      pedido.total = this.total;
      this._pedidoService.guardarPedido(pedido).subscribe(() => {
        console.log('Pedido agregado');
        this.loading = false;
        this.toastr.success(`El pedido ${pedido.nombre} se ha registrado`, 'Pedido registrado');
        this.router.navigate(['/pedidos']);
      })
    }
  }

  getPedido(codigo: string) {
    this.loading = true;
    this._pedidoService.getPedido(codigo).subscribe((data: Pedido) => {
      this.loading = false;
      this.formPedido.patchValue({
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        cantidad: data.cantidad,
        total: data.total,
        imagen: data.imagen,
      });
    });
  }

  totalPedido() {
    this.total = this.formPedido.value.precio * this.formPedido.value.cantidad;
    console.log(this.total)
  }

}
