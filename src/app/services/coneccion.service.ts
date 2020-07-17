import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConeccionService {
  constructor(private grupoZango: AngularFireDatabase) {
  }
  registrarEmpresas(empresa = {}, id: any) {
    return this.grupoZango.object(`grupoZangoApp/empresa/${id}`).update(empresa);
  }
  insertarTrampasInterior(trampas: any, trampa: any,id:any) {
    this.grupoZango.object(`grupoZangoApp/empresa/${id}/reportes/interior/trampas/${trampa}`).update(trampas);
  }
  obtenerEmpresas() {
    return this.grupoZango.list('grupoZangoApp/empresa').valueChanges();
  }
  obtenerId(id: any) {
    return this.grupoZango.list(`grupoZangoApp/empresa/${id}/reportes/interior/trampas`).valueChanges();
  }
}
