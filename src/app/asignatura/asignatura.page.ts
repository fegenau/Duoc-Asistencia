import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { ConsumoApiService } from '../service/consumo-api.service';
import { asignatura } from '../modelos/asignatura';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  nombre: any;
  id: any;
  
  
  private typeid!: asignatura;
  asignatura = new FormGroup({
    sigla: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(7),
    ]),
  });

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error Login',
      subHeader: 'Infomación : ',
      message: 'Usuario o contraseña son incorrecto',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
  constructor(

    private activeroute: ActivatedRoute, 
    private router: Router, 
    private consumoApi: ConsumoApiService,
    private alertController: AlertController,) 
  {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
      }
   }
  )};



  ngOnInit() {
  }

//consultarAsignatura(sigla:any){
//  this.consumoApi.getAsignatura(sigla).subscribe(
//    (data) => {
//      // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrarla en la interfaz de usuario.
//      console.log('Exito',data.status);
//      if(data.status === 200){
//        let setData: NavigationExtras = {
//          state: {
//            nombre: this.typeid.nombre,
//            sigla: this.typeid.sigla,
//          }
//        }
//      if (this.typeid.sigla == 'PGY4121'){
//        this.router.navigate(['/qrcode'],setData);
//      }
//      if (this.typeid.sigla == 'PBD0123'){
//        this.router.navigate(['/qrcode'],setData);
//      } 
//    }
//      if (data.status === 401) {
//        this.presentAlert();
//      }
//  },
//  (error) => {
//    console.log('Error en inicio de sesion:', error);
//  });
//  }
};



