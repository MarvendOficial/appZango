import { Component, OnInit } from '@angular/core';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  empresa ={
    id: '',
    nombre: '',
    noInterior:"",
    noExterior:"",
    noLamparas:"",
    contacto:"",
    telefono:"",
    direccion:"",
};
  constructor(private registrarEmpresa: ConeccionService, private empresaForm: FormBuilder) { }

  ngOnInit() {
  }
  registrar() {
    this.registrarEmpresa.registrarEmpresas(this.empresa)
    console.log(this.empresa);
  }

}
