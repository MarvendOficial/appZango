import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConeccionService } from 'src/app/services/coneccion.service';
import { FormGroupName, FormControlName } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { NavController, Platform } from '@ionic/angular';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  datos: any = [];
  todo = {};
  pdfObj: any;
  letterObj = {
    from: 'Pedro',
    to: 'Marvin',
    text: 'esto es una prueba'
  };
  prueba: any;
  tamaño: number;
  prueba2: any;
  tamaño2: number;
  prueba3: any;
  tamaño3: number;
  constructor(private router: Router, private empresaService: ConeccionService, public navCtrl: NavController, platform: Platform,
    private screenOrientation: ScreenOrientation) {
    this.empresaService.obtenerEmpresas().subscribe((res) => {
      this.datos = res;
    });
    this.empresaService.prueba().subscribe((res) => {
      this.prueba = res;
      this.tamaño = res.length;
      console.log(this.prueba);
    });
    this.empresaService.prueba2().subscribe((res) => {
      this.prueba2 = res;
      this.tamaño2 = res.length;
      console.log(this.prueba2);
    });
    this.empresaService.prueba3().subscribe((res) => {
      this.prueba3 = res;
      this.tamaño3 = res.length;
      console.log(this.prueba3);
    });
  }
  irReportes(id) {
    this.router.navigateByUrl('reportes/' + id);
  }
  ngOnInit() {
  }
  horizontal() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  pruebas() {
    const h = [15, 27];
    const h2 = [15, 27];
    const h3 = [15, 27];
    const headers = {
      fila_0: {
        col_1: { text: 'ESTACION', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0] },
        col_2: { text: 'ACTIVIDAD', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0] },
        col_3: { text: 'TRAMPAS INTERIORES', style: 'tableHeader', colSpan: 2, alignment: 'center' }
      },
      fila_1: {
        col_1: { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
        col_2: { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
        col_3: { text: 'CANTIDAD', style: 'tableHeader', alignment: 'center' },
        col_4: { text: 'OBSERVACIONES', style: 'tableHeader', alignment: 'center' },
      }
    };
    const headers2 = {
      fila_0: {
        col_1: { text: 'ESTACION', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0] },
        col_2: { text: 'ACTIVIDAD', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0] },
        col_3: { text: 'TRAMPAS EXTERIORES', style: 'tableHeader', colSpan: 2, alignment: 'center' }
      },
      fila_1: {
        col_1: { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
        col_2: { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
        col_3: { text: 'CANTIDAD', style: 'tableHeader', alignment: 'center' },
        col_4: { text: 'OBSERVACIONES', style: 'tableHeader', alignment: 'center' },
      }
    };
    const headers3 = {
      fila_0: {
        col_1: { text: 'TRAMPA #', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0] },
        col_2: { text: 'LOCALIZACION', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0] },
        col_3: { text: 'ACTIVIDAD', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0] },
        col_4: { text: 'TRAMPAS DE LUZ', style: 'tableHeader', colSpan: 2, alignment: 'center' }
      },
      fila_1: {
        col_1: { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
        col_2: { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
        col_3: { text: 'Header 3', style: 'tableHeader', alignment: 'center' },
        col_4: { text: 'NC', style: 'tableHeader', alignment: 'center' },
        col_5: { text: 'OBSERVACIONES', style: 'tableHeader', alignment: 'center' },
      }
    };
    const body3 = [];
    for (var key in headers3) {
      if (headers3.hasOwnProperty(key)) {
        const header = headers3[key];
        const row = new Array();
        row.push(header.col_1);
        row.push(header.col_2);
        row.push(header.col_3);
        row.push(header.col_4);
        row.push(header.col_5);
        body3.push(row);
      }
    }
    const body2 = [];
    for (var key in headers2) {
      if (headers2.hasOwnProperty(key)) {
        const header = headers2[key];
        const row = new Array();
        row.push(header.col_1);
        row.push(header.col_2);
        row.push(header.col_3);
        row.push(header.col_4);
        body2.push(row);
      }
    }
    const body = [];
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        const header = headers[key];
        const row = new Array();
        row.push(header.col_1);
        row.push(header.col_2);
        row.push(header.col_3);
        row.push(header.col_4);
        body.push(row);
      }
    }
    for (var key in this.prueba) {
      if (this.prueba.hasOwnProperty(key)) {
        var data = this.prueba[key];
        console.log(data);
        var row = new Array();
        row.push(data.trampa.toString());
        let acu = '';
        if (data.actividad.cc === true) {
          acu = acu + ' [CC] ';
        }
        if (data.actividad.ee === true) {
          acu = acu + ' [EE] ';
        }
        if (data.actividad.sc === true) {
          acu = acu + ' [SC] ';
        }
        if (data.actividad.er === true) {
          acu = acu + ' [ER] ';
        }
        if (data.actividad.ed === true) {
          acu = acu + ' [ED] ';
        }
        if (data.actividad.eb === true) {
          acu = acu + ' [EB] ';
        }
        console.log(acu);
        row.push(acu);

        row.push(data.noAnimal.toString());
        row.push(data.observacion.toString());
        body.push(row);
        h.push(27);
      }
    }
    for (var key in this.prueba2) {
      if (this.prueba2.hasOwnProperty(key)) {
        var data = this.prueba2[key];
        console.log(data);
        var row = new Array();
        row.push(data.trampa.toString());
        let acu = '';
        if (data.actividad.cc === true) {
          acu = acu + ' [CC] ';
        }
        if (data.actividad.ee === true) {
          acu = acu + ' [EE] ';
        }
        if (data.actividad.sc === true) {
          acu = acu + ' [SC] ';
        }
        if (data.actividad.er === true) {
          acu = acu + ' [ER] ';
        }
        if (data.actividad.ed === true) {
          acu = acu + ' [ED] ';
        }
        if (data.actividad.eb === true) {
          acu = acu + ' [EB] ';
        }
        console.log(acu);
        row.push(acu);

        row.push(data.noAnimal.toString());
        row.push(data.observacion.toString());
        body2.push(row);
        h2.push(27);
      }
    }
    for (var key in this.prueba3) {
      if (this.prueba3.hasOwnProperty(key)) {
        var data = this.prueba3[key];
        console.log(data);
        var row = new Array();
        row.push(data.lampara.toString());
        row.push(data.localizacion.toString())
        let acu = '';
        if (data.actividad.ci === true) {
          acu = acu + ' [CI] ';
        }
        if (data.actividad.si === true) {
          acu = acu + ' [SI] ';
        }
        if (data.actividad.td === true) {
          acu = acu + ' [TD] ';
        }
        if (data.actividad.cg === true) {
          acu = acu + ' [CG] ';
        }
        if (data.actividad.sc === true) {
          acu = acu + ' [SC] ';
        }
        if (data.actividad.tb === true) {
          acu = acu + ' [TB] ';
        }
        console.log(acu);
        row.push(acu);

        row.push(data.noAnimal.toString() + ' / ' + data.noAnimal2.toString());
        row.push(data.observacion.toString() + ' / ' + data.observacion.toString());
        body3.push(row);
        h3.push(27);
      }
    }
    console.log(h);
    var dd = {
      pageMargins: [40, 60, 40, 80],
      footer: function (currentPage, pageCount) {
        // return { text: 'Pagina ' + currentPage.toString() + ' de ' + pageCount, alignment: 'center', margin: [0, 30, 0, 0] };
        return {
          margin: [40, 0, 40, 0],
          text: currentPage.toString(),
          table: {
            widths: ['*'],
            body: [[{ text: 'Observacion: En estaciones de cebo se aplicó rodenticida anticoagulante en bloque al 0.005% de ingrediente activo.' }]
            ]
          },


        };
      },
      content: [
        {
          table: {
            style: 'tableExample',
            widths: ['*', 'auto'],
            body: [
              ['SITUACION QUE GUARDAN LAS ESTACIONES AL MOMENTO DE LA REVISIÓN EN: ', 'EXCEL NOBLEZA NAVE 3'],
              ['DIRECCION: TEPANCO DE LOPEZ', 'TEL: 2381042124'],
              [{ text: 'AÑO: ' + new Date().getFullYear(), alignment: 'left' },
              { text: 'FECHA: ' + new Date().toLocaleDateString(), alignment: 'left' }]
            ]
          }

        },
        {
          style: 'tableExample',
          table: {
            heights: h,
            widths: ['auto', 'auto', 'auto', '*'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: body
          }
        },
        // {
        //   table: {
        //     widths: ['*'],
        //     body: [
        //       [
        //         { text: 'CC= Con Consumo SC= Sin Consumo SR= Sin Roedores ED= Estación Dañada EE= Estación Extraviada ER= Estación Reubicada EB= Estación Bloqueada.' }
        //       ]
        //     ]
        //   }
        // },
        {
          style: 'tableExample',
          table: {
            heights: h2,
            widths: ['auto', 'auto', 'auto', '*'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: body2
          }
        },
        {

          style: 'tableExample',
          table: {
            heights: h3,
            widths: ['auto', 'auto', 'auto', 'auto', '*'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: body3
          }
        },

      ],

      styles: {
        header: {
          fontSize: 28,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        },
        sta: {
          fontSize: 11,
          bold: false,
          alignment: 'justify'
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
      }
    };
    this.pdfObj = pdfMake.createPdf(dd);

    this.pdfObj.download();
  }




}
