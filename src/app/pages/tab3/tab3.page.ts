import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';
import {FormGroupName,FormControlName} from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  datos: any = [];
  todo = {};
  constructor(private router: Router, private empresaService: ConeccionService ) {
    this.empresaService.obtenerEmpresas().subscribe((res) => {
      this.datos = res;
      console.log(this.datos.nombre)
    })
  }
  ngOnInit() {
  }
  prueba(f) {
    console.log(f.value);
  }

}
