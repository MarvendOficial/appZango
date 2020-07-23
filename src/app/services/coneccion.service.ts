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
  insertarTrampasInterior(trampas: any, trampa: any, id: any) {
    this.grupoZango.object(`grupoZangoApp/empresa/${id}/reportes/interior/${trampa}`).update(trampas);
  }
  insertarTrampasExteriores(trampas: any, trampa: any, id: any) {
    this.grupoZango.object(`grupoZangoApp/empresa/${id}/reportes/exteriores/${trampa}`).update(trampas);
  }
  insertarLamparas(lamparas: any, lampara: any, id: any) {
    this.grupoZango.object(`grupoZangoApp/empresa/${id}/reportes/lamparas/${lampara}`).update(lamparas);
  }
  obtenerEmpresas() {
    return this.grupoZango.list('grupoZangoApp/empresa').valueChanges();
  }
  obtenerId(id: any) {
    return this.grupoZango.list(`grupoZangoApp/empresa/${id}/reportes/interior`).valueChanges();
  }
  obtenerObjectoPdf(id: any, nombreReport) {
    return this.grupoZango.object(`grupoZangoApp/empresa/${id}/reportes/${nombreReport}`).valueChanges();
  }
  obtenerExteriores(id: any) {
    return this.grupoZango.list(`grupoZangoApp/empresa/${id}/reportes/exteriores`).valueChanges();
  }
  obtenerLamparas(id:any){
    return this.grupoZango.list(`grupoZangoApp/empresa/${id}/reportes/lamparas`).valueChanges();
  }
  guardarTrampa(idEmpresa, trampa, id, reporteNombre) {
    return this.grupoZango.object(`grupoZangoApp/empresa/${idEmpresa}/reportes/${reporteNombre}/${id}`).update(trampa);
  }
  guardarReportePdf(idEmpresa,idReportePdf,reporteNombre,datos){
    this.grupoZango.database.ref(`grupoZangoApp/empresa/${idEmpresa}/reportesPdf/${idReportePdf}/id`).set(idReportePdf);
    return this.grupoZango.object(`grupoZangoApp/empresa/${idEmpresa}/reportesPdf/${idReportePdf}/${reporteNombre}`).update(datos);
  }
  prueba() {
    return this.grupoZango.list('grupoZangoApp/empresa/12/reportes/interior').valueChanges();
  }
  prueba2() {
    return this.grupoZango.list('grupoZangoApp/empresa/12/reportes/exteriores').valueChanges();
  }
  prueba3(){
    return this.grupoZango.list('grupoZangoApp/empresa/12/reportes/lamparas').valueChanges();
  }
}
