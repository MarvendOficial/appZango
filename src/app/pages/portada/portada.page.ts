import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {

  check = [];
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 70; index++) {
      const array = [];
      this.check.push(array[index] = false);
    }
  }
  ver(f) {
    const element = [];
    for (let index = 0; index < this.check.length; index++) {
      if (this.check[index] === false) {
        element.push('[ ]');
      } else if (this.check[index] === true) {
        element.push('[X]');
      }
    }
    console.log(f.value, this.check, element);
  }

}
