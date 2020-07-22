import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exteriores',
  templateUrl: './exteriores.page.html',
  styleUrls: ['./exteriores.page.scss'],
})
export class ExterioresPage implements OnInit {
  exterior: any;
  id: any;
  cc = false;
  eb = false;
  ed = false;
  ee = false;
  er = false;
  sc = false;
  
  constructor(private route: ActivatedRoute, private empresaService: ConeccionService, private empresaForm: FormBuilder) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empresaService.obtenerExteriores(this.id).subscribe((res) => {
      this.exterior = res;
      console.log(this.exterior);
    });
  }

  ngOnInit() {
  }

  guardarTrampa(f, id) {
    const trampa = {
      noAnimal: f.value.noAnimal,
      observacion: f.value.observacion,
      actividad: {
        cc: this.cc,
        eb: this.eb,
        ed: this.ed,
        ee: this.ee,
        er: this.er,
        sc: this.sc
      }
    }
    this.empresaService.guardarTrampa(this.id, trampa, id, 'exteriores');
    this.cc = false;
    this.eb = false;
    this.ed = false;
    this.ee = false;
    this.er = false;
    this.sc = false;
  }
  check(e, name) {
    const checked = e.detail.checked;
    if (name === 'cc') {
      this.cc = checked;
    } else if (name === 'ee') {
      this.ee = checked;
    } else if (name === 'eb') {
      this.eb = checked;
    } else if (name === 'ed') {
      this.ed = checked;
    } else if (name === 'er') {
      this.er = checked;
    } else if (name === 'sc') {
      this.sc = checked;
    }
  }
}
