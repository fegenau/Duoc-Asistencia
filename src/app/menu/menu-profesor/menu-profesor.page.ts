import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.page.html',
  styleUrls: ['./menu-profesor.page.scss'],
})
export class MenuProfesorPage implements OnInit {

  nombre: any;
  apellido: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) 
  { 
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state ) {
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this. apellido = this.router.getCurrentNavigation()?.extras.state?.['apellidop'];
        }
      }
    
  )}


  ngOnInit() {
  }

  gotopage(){
    let setData: NavigationExtras = {
      state: {
        nombre: this.nombre,
        apellido: this.apellido
      }
    }
    this.router.navigate(['/asignatura'],setData);
  };
}