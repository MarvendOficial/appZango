import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConeccionService {
  id:any
  constructor(private grupoZango: AngularFireDatabase) { 
  }
  registrarEmpresas(empresa={}, id: any){
    return this.grupoZango.object(`grupoZangoApp/empresa/${id}`).update(empresa);
  }
  obtenerEmpresas(){
    return this.grupoZango.list('grupoZangoApp/empresa').valueChanges();
  }
  obtenerId(id: any){
    return this.grupoZango.object(`grupoZangoApp/empresa/${this.id}`).valueChanges()
  }
}
