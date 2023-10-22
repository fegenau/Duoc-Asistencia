import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  nombre: any;
  apellido: any;
  correo : any;
  carrera: any;
  rut: any;
  tipoEstudiante:any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state ) {
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this. apellido = this.router.getCurrentNavigation()?.extras.state?.['apellidop'];
        this.rut = this.router.getCurrentNavigation()?.extras.state?.['rut'];
        this.correo = this.router.getCurrentNavigation()?.extras.state?.['correo'];
        this.carrera = this.router.getCurrentNavigation()?.extras.state?.['carrera'];
        
      }
    })
   }

  ngOnInit() {
  }

}
