import { Component, OnInit } from '@angular/core';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lamparas',
  templateUrl: './lamparas.page.html',
  styleUrls: ['./lamparas.page.scss'],
})
export class LamparasPage implements OnInit {

  id: any;
  lamparas: any;
  ci = false;
  cg = false;
  si = false;
  sc = false;
  td = false;
  tb = false;
  constructor(private route: ActivatedRoute, private empresaService: ConeccionService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empresaService.obtenerLamparas(this.id).subscribe((res) => {
      this.lamparas = res;
      console.log(this.lamparas);
    });
  }

  ngOnInit() {
  }
  prueba(f){
    console.log(f.value);
  }
  guardarTrampa(f, id) {
    const lampara = {
      noAnimal: f.value.noAnimal,
      noAnimal2: f.value.noAnimal2,
      observacion: f.value.observacion,
      observacion2: f.value.observacion2,
      localizacion: f.value.localizacion,
      actividad: {
        ci : this.ci,
        cg : this.cg,
        si : this.si,
        sc : this.sc,
        td : this.td,
        tb : this.tb,
      }
    };
    this.empresaService.guardarTrampa(this.id, lampara, id, 'lamparas');
    this.ci = false;
    this.cg = false;
    this.si = false;
    this.sc = false;
    this.td = false;
    this.tb = false;
  }
  check(e, name) {
    const checked = e.detail.checked;
    if (name === 'ci') {
      this.ci = checked;
    } else if (name === 'cg') {
      this.cg = checked;
    } else if (name === 'si') {
      this.si = checked;
    } else if (name === 'sc') {
      this.sc = checked;
    } else if (name === 'td') {
      this.td = checked;
    } else if (name === 'tb') {
      this.tb = checked;
    }
  }

}
