import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild('barChart', { static: true }) barChart;
  @ViewChild('barChart2', { static: true }) barChart2;
  bars: any;
  bars2: any;
  constructor() { }

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
