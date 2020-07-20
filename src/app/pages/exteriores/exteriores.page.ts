import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exteriores',
  templateUrl: './exteriores.page.html',
  styleUrls: ['./exteriores.page.scss'],
})
export class ExterioresPage implements OnInit {
  array:any;
  constructor() { }

  ngOnInit() {
  }
  prueba(f){
    console.log(f.value)
  }
}
