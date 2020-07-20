import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.page.html',
  styleUrls: ['./interior.page.scss'],
})
export class InteriorPage implements OnInit {
  interior: any;
  datos: any;
  id: any;
  t = {};
  trampas = {
    trampa: null,
    noAnimal: null,
    observacion: '',
    actividad: {
      cc: false,
      eb: false,
      ed: false,
      ee: false,
      er: false,
      sc: false
    }
  };
  constructor(private route: ActivatedRoute, private empresaService: ConeccionService, private empresaForm: FormBuilder) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.datos = true;
    this.empresaService.obtenerId(this.id).subscribe((res) => {
      this.interior = res;
      if (res.length < 0) {
        this.datos = false;
      } else {
        this.datos = true;
      }
      console.log(this.interior.length);
    });
  }

  ngOnInit() {
  }
  prueba(f, id) {
    // this.empresaService.update(f.value,this.id);
    console.log(f.value, id);
  }
  guardarTrampa(f,id){
    this.empresaService.guardarTrampa(this.id,f.value, id);
  }
  updateChecked(e, idTrampa, nombre) {

    let status;
    if (e.detail.checked === true) {
      status = true;
    } else {
      status = false;
    }
    console.log(this.id,status, idTrampa, nombre);
    this.empresaService.actualizarActividad(this.id,status, idTrampa, nombre);
  }
}
