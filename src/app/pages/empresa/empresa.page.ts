import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {
  datos: any;
  id: any;
  constructor(private router: Router, private empresaService: ConeccionService, private route: ActivatedRoute) {
    this.empresaService.obtenerEmpresas().subscribe((res) => {
      console.log(res);
      this.datos = res;
      console.log(this.datos);
    });
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  irExteriores() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/exteriores/' + this.id);
  }
  irInterior() {
    this.router.navigateByUrl('interior/' + this.id);
  }
  irLamparas() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/lamparas/' + this.id);
  }
  irPortada() {
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/portada/' + this.id);
  }
  ngOnInit() {
  }

}
