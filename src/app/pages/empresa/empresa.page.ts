import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {
  datos: any;
  constructor(private router: Router, private empresaService: ConeccionService) {
    this.empresaService.obtenerEmpresas().subscribe((res) => {
      console.log(res);
      this.datos = res;
      console.log(this.datos);
    });
  }

  irExteriores() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/exteriores')
  }
  irInterior() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/interior')
  }
  irLamparas() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/lamparas')
  }
  irPortada() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/portada')
  }
  ngOnInit() {
  }

}
