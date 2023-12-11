import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ConsumoApiService } from 'src/app/service/consumo-api.service';

@Component({
  selector: 'app-menu-estudiante',
  templateUrl: './menu-estudiante.page.html',
  styleUrls: ['./menu-estudiante.page.scss'],
})
export class MenuEstudiantePage implements OnInit {
  nombre: any;
  apellido: any;
  correo: any;
  carrera: any;
  rut: any;
  tipoEstudiante: any;

  constructor(

    private consumoApi: ConsumoApiService,
    private activeroute: ActivatedRoute, 
    private router: Router,
    private barcodeScanner: BarcodeScanner

    ) {
    this.activeroute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombre =
          this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.apellido =
          this.router.getCurrentNavigation()?.extras.state?.['apellido'];
        this.carrera =
          this.router.getCurrentNavigation()?.extras.state?.['carrera'];
      }
      //aplicar metodo registrarasistencia 
      //this.consumoApi.registrarAsistenciaAlumno 
    });
  }
  scanQRCode(){
    this.barcodeScanner.scan().then((barcodeData) => {
      this.consumoApi.registrarAsistenciaAlumno(this.nombre,'PGY1411')
      console.log('Resultado del escaneo:',barcodeData.text);

    })
    .catch((error) => {
      console.error('Error al escanear',error);
    })
  }

  ngOnInit() {}
}
