import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {
  portada = {
    noReporte: 0,
    inicio: 0,
    termino : 0,
    check: [],
    cantidad: [],
    ingrediente: []
  }
  // check = [];
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 70; index++) {
      const array = [];
      this.portada.check.push(array[index] = false);
    }
  }
  ver(f) {
    const element = [];
    // for (let index = 0; index < this.check.length; index++) {
    //   if (this.check[index] === false) {
    //     element.push('[ ]');
    //   } else if (this.check[index] === true) {
    //     element.push('[X]');
    //   }
    // }
    console.log(f.value, this.portada, element);
  }

}
