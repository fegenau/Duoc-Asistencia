import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';
import { usuario } from '../modelos/usuarios';
import { perfil } from '../modelos/perfil';
import { ConsumoApiService } from '../service/consumo-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  desUser = "Ingrese usuario";
  desPassword = "Ingrese contraseña";
  desLogin = "Iniciar Sesion"
  user = {
    usuario: "",
    password: ""
  }

  listaPerfiles: perfil [] = [
    {
      id:1,
      nombre:"Estudiante"
    },
    {
      id:2,
      nombre:"Profesor"
    }
  ];

    listaUsuario: usuario[] = [
      {
        id:18292912-3,
        nombre:"Juan",
        user:"juan",
        correo:'juan@duouc.cl',
        tipoPerfil:1
      },
      {
        id:18292912-4,
        nombre:"Pedro",
        user:"pedro",
        correo:'pedro@duocuc.cl',
        tipoPerfil:2
      }
  ];

  gotohome(){
    let setData: NavigationExtras = {
      state: { user:this.user.usuario}
    };
    const usuarioActual = this.listaUsuario.find((usuario) => usuario.user === this.user.usuario);

    if(usuarioActual) {
      const perfilUsuario = this.listaPerfiles.find((perfil) => perfil.id === usuarioActual.tipoPerfil);
      if(perfilUsuario && perfilUsuario.id === 1){
        this.router.navigate(['profesor']);

       }else if(perfilUsuario && perfilUsuario.id === 2){
        this.router.navigate(['estudiante']);

       }else{
        console.log("Perfil no reconocido")
       }
      
    } else{
      console.log("Usuario no entontrado");
    }
    

  }
  constructor(private router: Router, private consumoApi: ConsumoApiService) { }
    getUsuario(){
      //const responseJson = this.generateResponseJson();
      this.consumoApi.GetAllUser()
        .subscribe(
          (response) => { // Asegúrate de que estás tipando la respuesta como HttpResponse.
            console.log('Éxito:', response);
            console.log('Código de estado HTTP:', response); 
          },
          (error) => {
            console.log('Error al guardar parcialmente:', error);
            if (error.status) {
                console.log('Código de estado HTTP del error:', error.status);
            }
          }
        );
    }
    
 

  ngOnInit() {
  }
  navigate(){
      this.router.navigate(['home/estudiante'])
    }
  }
