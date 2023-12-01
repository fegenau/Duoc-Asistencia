import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { LoginPage } from './login.page';
import { ConsumoApiService } from '../service/consumo-api.service';
import { usuario } from '../modelos/usuarios';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let consumoApiSpy: jasmine.SpyObj<ConsumoApiService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    consumoApiSpy = jasmine.createSpyObj('ConsumoApi', ['login']);
    
    

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [RouterTestingModule],
      providers: [
        { provide: ConsumoApiService, useValue: consumoApiSpy },
        { provide: Router, useValue: routerSpy },
        
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call login and navigate on successful login', () => {
    //const mockUsuario = {usuario:'fr.egenau', contraseña:'fr.egenau'};
    const usuario : usuario = { id:undefined, nombre:undefined, email:undefined,tipo:undefined,rut: undefined, carrera: undefined, apellidop: undefined,usuario: 'fr.egenau', contraseña: 'fr.egenau'}
    const mockResponse: HttpResponse<usuario> = new HttpResponse<usuario>({
        body: usuario
    })
    consumoApiSpy.login.arguments('fr.egenau','fr.egenau').returnValue(mockResponse);
    

    component.ingresar();

    expect(consumoApiSpy.login).toHaveBeenCalledWith('fr.egenau','fr.egenau')
        
    });
  });

//  it('should call alert on login error with status 401', () => {
//    const errorResponse = { status: 401 };
//    consumoApiSpy.login.and.returnValue(throwError(errorResponse));
//
//    component.ingresar();
//
//    expect(consumoApiSpy.login).toHaveBeenCalledWith('usuario', 'contraseña');
//  });

  // Agrega más pruebas según sea necesario
