import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { usuario } from '../modelos/usuarios';
<<<<<<< HEAD
import { perfil } from '../modelos/perfil';
import {FormGroup,FormControl,Validators,} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ConsumoApiService } from '../service/consumo-api.service';
import { AuthGuard } from '../home/guards/auth.guard';
=======
import { ConsumoApiService } from '../service/consumo-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
>>>>>>> egenau

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
<<<<<<< HEAD
=======
  static login(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
>>>>>>> egenau
  private typeuser!: usuario;
  desUser = 'Ingrese usuario';
  desPassword = 'Ingrese contraseña';
  textUser = 'Usuario';
  textPass = 'Contraseña';
  textBtn = 'Ingresar';
  usuario = new FormGroup({
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    contraseña: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  ingresar() {
    this.consumoApi
      .login(this.usuario.value.usuario!, this.usuario.value.contraseña!)
      .subscribe(
        (response) => {
          // Asegúrate de que estás tipando la respuesta como HttpResponse.
          this.typeuser = response.body as unknown as usuario;
          console.log('Éxito:', response.status);
          if (response.status === 200) {
            let setData: NavigationExtras = {
              state: {
                id: this.typeuser,
                usuario: this.typeuser.usuario,
                email: this.typeuser.email,
                nombre: this.typeuser.nombre,
                tipo: this.typeuser.tipo,
                rut: this.typeuser.rut,
                carrera: this.typeuser.carrera,
                apellidop: this.typeuser.apellidop,
              },
            };
<<<<<<< HEAD
            console.log('Código de estado HTTP:' + this.typeuser.tipo);
            if (this.typeuser.tipo == 1) {
              this.auth.setAuthenticationStatus(true);
              this.router.navigate(['/menu-estudiante'], setData);
            }
            if (this.typeuser.tipo == 2) {
              this.auth.setAuthenticationStatus(true);
              this.router.navigate(['/menu-profesor'], setData);
            }
          }
          if (response.status === 401) {
            this.presentAlert();
=======
            this.router.navigate(['/loading'], setData);
          }else{
            if (response.status === 401){
              this.alert();
            }
>>>>>>> egenau
          }
        },
        (error) => {
          console.log('Error en inicio de sesion:', error);
<<<<<<< HEAD
        });
  }
  async presentAlert() {
=======
        }
      );
  };
  async alert() {
>>>>>>> egenau
    const alert = await this.alertController.create({
      cssClass: 'Error login',
      header: 'Informacion :',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK']
    });
    await alert.present();
  }
<<<<<<< HEAD
  constructor(
    private router: Router,
    private consumoApi: ConsumoApiService,
    private auth: AuthGuard,
=======
  

  constructor(
    private router: Router,
    private consumoApi: ConsumoApiService,
>>>>>>> egenau
    private alertController: AlertController
  ) {}
  ngOnInit() {}
}
