import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { ConsumoApiService } from '../service/consumo-api.service';
import { asignatura } from '../modelos/asignatura';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  private typeid!: asignatura;

  nombre: any;
  apellido: any;
  id: any;

  asignaturas = new FormGroup({
    asignatura: new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(6),
    ]),
  });

  constructor(

    private activeroute: ActivatedRoute, 
    private router: Router, 
    private consumoApi: ConsumoApiService,) 
  {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.apellido = this.router.getCurrentNavigation()?.extras.state?.['apellidop']
      }
   }
  )};

  clases(){
    this.consumoApi
    .asignatura(this.asignaturas.value.asignatura!)
    .subscribe(
      (response) => {
        this.typeid = response.body as unknown as asignatura;
        console.log('Éxito:', response.status);
        if (response.status === 200) {
          let setData: NavigationExtras = {
            state: {
              id: this.typeid.id,
              nombre: this.typeid.nombre,
              sigla: this.typeid.sigla,
            },
          };
          console.log('codigo de estado HTTP:' + this.typeid.sigla);
          
          if(this.typeid.sigla === 'PGY4121'){
            this.router.navigate(['/qrpage'],setData);
          }

          if(this.typeid.sigla === 'PBD0123'){
            this.router.navigate(['/qrpage'],setData);
          }
        }
    
    })
  };

  ngOnInit() {
  }

  gotopage(){
    let setData: NavigationExtras = {
      state: {
        nombre: this.nombre,
        apellido: this.apellido
      }
    }
    this.router.navigate(['/qrpage'],setData);
  };
}

