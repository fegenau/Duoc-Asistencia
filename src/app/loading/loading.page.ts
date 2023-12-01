import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GuardsGuard } from '../home/guards/guards.guard';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  nombre: any;
  apellido: any;
  tipo:any;
  carrera: any;

  constructor(private route: ActivatedRoute, private router: Router,private navCtrl: NavController, private auth: GuardsGuard) 
  { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state ) {
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this. apellido = this.router.getCurrentNavigation()?.extras.state?.['apellidop'];
        this. tipo = this.router.getCurrentNavigation()?.extras.state?.['tipo'];
        this.carrera=this.router.getCurrentNavigation()?.extras.state?.['carrera'];
        }

      }
    )};
      

  ngOnInit() {

    let setData: NavigationExtras = {
      state: {
        nombre: this.nombre,
        apellido: this.apellido,
        carrera: this.carrera
      }
    }
    if (this.tipo == 1){
      this.auth.setAutenticationStatus(true);
      setTimeout(() => {
        // Redirige a la página deseada después de 3 segundos
        this.navCtrl.navigateForward('menu-estudiante',setData);
      }, 2500); // 3000 milisegundos (3 segundos)
    }
    if (this.tipo == 2){
      this.auth.setAutenticationStatus(true);
      setTimeout(() => {
        // Redirige a la página deseada después de 3 segundos
        this.navCtrl.navigateForward('menu-profesor',setData);
      }, 2500); // 3000 milisegundos (3 segundos)
    }
  }
}
  

