import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analizar',
  templateUrl: './analizar.page.html',
  styleUrls: ['./analizar.page.scss'],
})
export class AnalizarPage implements OnInit {

  constructor(private router: Router) { }

  empresa(){
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa')
  }

  ngOnInit() {
  }

}
