import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-menu-estudiante',
  templateUrl: './menu-estudiante.page.html',
  styleUrls: ['./menu-estudiante.page.scss'],
})
export class MenuEstudiantePage implements OnInit {

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
        this.carrera = this.router.getCurrentNavigation()?.extras.state?.['carrera'];
      }
    })
  }

  ngOnInit() {
  }

}
