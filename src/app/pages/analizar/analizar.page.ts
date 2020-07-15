import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';

@Component({
  selector: 'app-analizar',
  templateUrl: './analizar.page.html',
  styleUrls: ['./analizar.page.scss'],
})
export class AnalizarPage implements OnInit {
  datos: any;
  constructor(private router: Router, private empresaService: ConeccionService) {
    this.empresaService.obtenerEmpresas().subscribe((res) => {
      this.datos = res;
      console.log(this.datos);
    });
  }

  empresa() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa')
  }
  verEmpresas() {
    console.log(this.empresaService.obtenerEmpresas())
  }

  ngOnInit() {
  }

}
