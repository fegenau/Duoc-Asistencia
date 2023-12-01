import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.page.html',
  styleUrls: ['./menu-profesor.page.scss'],
})
export class MenuProfesorPage implements OnInit {

  nombre: any;
  apellido: any;

  constructor(private route: ActivatedRoute, private router: Router) 
  { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state ) {
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this. apellido = this.router.getCurrentNavigation()?.extras.state?.['apellido'];
        }
      }
    
  )};
  ngOnInit() {
  }
  
}