import { Component, OnInit } from '@angular/core';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { NgModule } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { LoadingController} from '@ionic/angular';
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
  constructor(private registrarEmpresa: ConeccionService, private empresaForm: FormBuilder, private cargarCtrl: LoadingController, public alertaCtrl: AlertController) { }

  ngOnInit() {
  }
  
  async registrar() {
    this.registrarEmpresa.registrarEmpresas(this.empresa).then(()=>{
      this.cargar();
      console.log('Empresa registrada');
    },
    (err)=>{
      console.log(err)
    })
    this.alerta();
    this.limpiarDatos();
  }
  async cargar(){
    let loading= await this.cargarCtrl.create({
      message: 'Cargando...'
    });
    loading.present();
    setTimeout(()=>{
      loading.dismiss();
      
    },2000)
  }
  async alerta(){
    let alert= await this.alertaCtrl.create({
      header: 'Registrado',
      message: 'Se ha registrado con éxito',
      buttons:[
        {
          text: 'OK',
          handler:() => {

          }
        }
      ]
    });
    setTimeout(()=>{
      alert.present();
    },2000)
    alert.dismiss();
  }
  
  limpiarDatos(){
    this.empresa ={
      id:'',
      nombre: '',
      noInterior:"",
      noExterior:"",
      noLamparas:"",
      contacto:"",
      telefono:"",
      direccion:"",
  };
  }
}
