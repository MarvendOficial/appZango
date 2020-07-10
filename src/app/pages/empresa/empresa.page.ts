import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {

  constructor(private router: Router) { }

  irExteriores(){
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/exteriores')
  }
  irInterior(){
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/interior')
  }
  irLamparas(){
    this.router.navigateByUrl('/tabs/tab1/analizar/empresa/lamparas')
  }
  ngOnInit() {
  }

}
