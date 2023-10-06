import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-edit-usuario',
  templateUrl: './add-edit-usuario.component.html',
  styleUrls: ['./add-edit-usuario.component.css']
})
export class AddEditUsuarioComponent implements OnInit {
  formUsuario: FormGroup;
  loading: boolean = false;
  codigo: string;
  operacion: string = "Agregar ";
  // usuarioEnUso: boolean = false;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.formUsuario = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', Validators.required],
    })
    this.codigo = String(aRoute.snapshot.paramMap.get('codigo'));
    // console.log(this.codigo)
  }
  ngOnInit(): void {
    if (this.codigo.length > 5) {
      this.operacion = "Editar ";
      this.getUsuario(this.codigo);
      
    }
  }

  addUsuario(){
    const usuario: Usuario = {
      nombre: this.formUsuario.value.nombre,
      usuario: this.formUsuario.value.usuario,
      password: this.formUsuario.value.password,
      email: this.formUsuario.value.email,
    }

    this.loading = true;
    if (this.codigo.length > 5){
      //Editar      
      usuario.codigo = this.codigo;
      this._usuarioService.actualizarUsuario(this.codigo, usuario).subscribe(() => {
        this.loading = false;
        this.toastr.info(`El usuario ${usuario.nombre} se ha actualizado`, 'Usuario actualizado');
        this.router.navigate(['/']);
      });
    } else {
      //Agregar
      this._usuarioService.guardarUsuario(usuario).subscribe(() => {
        console.log('Usuario agregado');
        this.loading = false;
        this.toastr.success(`El usuario ${usuario.nombre} se ha registrado`, 'Usuario registrado');
        this.router.navigate(['/']);
      })
    }
  }

  getUsuario(codigo: string) {
    this.loading = true;
    this._usuarioService.getUsuario(codigo).subscribe((data: Usuario) => {
      this.loading = false;
      this.formUsuario.patchValue({
        nombre: data.nombre,
        usuario: data.usuario,
        password: data.password,
        email: data.email
      });
    });
  }
  
}
