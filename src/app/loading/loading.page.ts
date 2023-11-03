import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  nombre: any;
  apellido: any;

  constructor(private route: ActivatedRoute, private router: Router,private navCtrl: NavController) 
  { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state ) {
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this. apellido = this.router.getCurrentNavigation()?.extras.state?.['apellidop'];
        }
      }
    )};
      

  ngOnInit() {

    let setData: NavigationExtras = {
      state: {
        nombre: this.nombre,
        apellido: this.apellido
      }
    }
    setTimeout(() => {
      // Redirige a la página deseada después de 3 segundos
      this.navCtrl.navigateForward('menu-profesor',setData);
    }, 3000); // 3000 milisegundos (3 segundos)
  }
}
  

