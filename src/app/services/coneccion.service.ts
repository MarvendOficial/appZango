import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConeccionService {
  constructor(private grupoZango: AngularFireDatabase) { 

  }
  registrarEmpresas(empresa={}){
    return this.grupoZango.database.ref('grupoZangoApp/emmpresa').push(empresa);
  }
  obtenerEmpresas(){
    return this.grupoZango.list('grupoZangoApp/emmpresa').valueChanges();
  }
}
