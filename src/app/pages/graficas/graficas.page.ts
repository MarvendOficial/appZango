import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {
  datos: any;
  id: any;
  @ViewChild('barChart', { static: true }) barChart;
  @ViewChild('barChart2', { static: true }) barChart2;
  bars: any;
  bars2: any;
  constructor(private router: Router, private empresaService: ConeccionService, private route: ActivatedRoute) { 
    this.empresaService.obtenerEmpresas().subscribe((res) => {
      console.log(res);
      this.datos = res;
      console.log(this.datos);
    });
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.GraficaInteriores();
    this.GraficaExteriores();
  }

  GraficaInteriores() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
          label: 'Consumo de Trampas Interiores',
          data: [2, 0, 5, 11, 0, 3, 0, 1],
          backgroundColor: 'rgba(0,187,100)'
        }]
      }
    });
  }

  GraficaExteriores() {
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
          label: 'Consumo de Trampas Exteriores',
          data: [0, 100, 50, 0, 100, 50, 0, 100],
          backgroundColor: 'rgba(0,187,100)'
        }]
      }
    });
  }
}
