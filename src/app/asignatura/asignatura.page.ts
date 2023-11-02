import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  nombre: any;
  apellido: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) 
  {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.apellido = this.router.getCurrentNavigation()?.extras.state?.['apellidop']
      }
   }
  )};
  ngOnInit() {
  }

}

