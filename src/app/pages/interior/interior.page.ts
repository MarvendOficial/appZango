import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.page.html',
  styleUrls: ['./interior.page.scss'],
})
export class InteriorPage implements OnInit {
  interior: any;
  id: any;
  constructor(private route: ActivatedRoute, private empresaService: ConeccionService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empresaService.obtenerId(this.id).subscribe((res) => {
      this.interior = res;
      console.log(this.interior);
    });
  }

  ngOnInit() {
  }

}
