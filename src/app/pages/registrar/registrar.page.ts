import { Component, OnInit } from '@angular/core';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { NgModule } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  empresa = {
    id: '',
    nombre: '',
    noInterior: null,
    noExterior: null,
    noLamparas: null,
    contacto: "",
    telefono: "",
    direccion: "",
  };
  
  constructor(private registrarEmpresa: ConeccionService, private empresaForm: FormBuilder, private cargarCtrl: LoadingController, public alertaCtrl: AlertController) { }

  ngOnInit() {
  }
  registrar() {
    this.registrarEmpresa.registrarEmpresas(this.empresa, this.empresa.id);
    console.log(this.empresa);
    this.insertarInterirores();
  }
  insertarInterirores() {
    
    for (let index = 0; index < 10; index++) {
      let trampa = {
        trampa: index,
        noAnimal: "",
        observacion: "",
        actividad: {
          cc: false,
          eb: false,
          ed: false,
          ee: false,
          er: false,
          sc: false
        }
      }
      this.registrarEmpresa.insertarTrampasInterior(trampa, index, '01');
    }
  }
  async cargar() {
    let loading = await this.cargarCtrl.create({
      message: 'Cargando...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();

    }, 2000)
  }
  async alerta() {
    let alert = await this.alertaCtrl.create({
      header: 'Registrado',
      message: 'Se ha registrado con éxito',
      buttons: [
        {
          text: 'OK',
          handler: () => {

          }
        }
      ]
    });
    setTimeout(() => {
      alert.present();
    }, 2000)
    alert.dismiss();
  }

  limpiarDatos() {
    this.empresa = {
      id: '',
      nombre: '',
      noInterior: "",
      noExterior: "",
      noLamparas: "",
      contacto: "",
      telefono: "",
      direccion: "",
    };
  }
}
