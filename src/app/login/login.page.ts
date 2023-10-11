import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { usuario } from '../modelos/usuarios';
import { perfil } from '../modelos/perfil';
import { ConsumoApiService } from '../service/consumo-api.service';
//import { AuthGuard } from ;

import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private typeuser!: usuario;

  desUser = 'Ingrese usuario';
  desPassword = 'Ingrese contraseña';
  textUser = 'Usuario';
  textPass = 'Iniciar Sesion';
  textBtn = 'Ingresar';

  usuario = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  ingresar() {
    //const responseJson = this.generateResponseJson();
    this.consumoApi
      .login(this.usuario.value.user!, this.usuario.value.pass!)
      .subscribe(
        (response) => {
          // Asegúrate de que estás tipando la respuesta como HttpResponse.
          this.typeuser = response.body as unknown as usuario;
          console.log('Éxito:', response.status);
          if (response.status === 200) {
            let setData: NavigationExtras = {
              state: {
                id: this.typeuser.id,
                usuario: this.typeuser.usuario,
                email: this.typeuser.email,
                nombre: this.typeuser.nombre,
                tipo: this.typeuser.tipo,
              },
            };

            console.log('Código de estado HTTP:' + this.typeuser.tipo);

            if (this.typeuser.tipo === 1) {
              //this.auth.setAuthenticationStatus(true);
              this.router.navigate(['/estudiante'], setData);
            }

            if (this.typeuser.tipo === 2) {
              //this.auth.setAuthenticationStatus(true);
              this.router.navigate(['/profesor'], setData);
            }
          }

          if (response.status === 401) {
            this.presentAlert();
          }
        },
        (error) => {
          console.log('Error en inicio de sesion:', error);
        });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error Login',
      subHeader: 'Infomación : ',
      message: 'Usuario o contraseña son incorrecto',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  //        if (error.status) {
  //            console.log('Código de estado HTTP del error:', error.status);
  //        }
  //      }
  //    );

  // listaPerfiles: perfil [] = [
  //// {
  ////   id:1,
  ////   nombre:"Estudiante"
  //// },
  //// {
  ////   id:2,
  ////   nombre:"Profesor"
  //// }
  //]
  //const usuarioActual = this.listaUsuario.find((usuario) => usuario.user === this.user.usuario);

  //if(usuarioActual) {
  //  const perfilUsuario = this.listaPerfiles.find((perfil) => perfil.id === usuarioActual.tipoPerfil);
  //  if(perfilUsuario && perfilUsuario.id === 1){
  //    this.router.navigate(['profesor']);

  //   }else if(perfilUsuario && perfilUsuario.id === 2){
  //    this.router.navigate(['estudiante']);

  //   }else{
  //    console.log("Perfil no reconocido")
  //   }
  //
  //} else{
  //  console.log("Usuario no entontrado");

  //}

  constructor(
    private router: Router,
    private consumoApi: ConsumoApiService,
    //private auth: AuthGuard,
    private alertController: AlertController
  ) {}

  ngOnInit() {}
  navigate() {
    this.router.navigate(['home/estudiante']);
  }
}
