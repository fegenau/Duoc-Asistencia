import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
//import { TuComponente } from './tu-componente.component';
//import { ConsumoApi } from './consumo-api.service';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { HttpResponse } from '@angular/common/http';
import { LoginPage } from './login.page';
import { ConsumoApiService } from '../service/consumo-api.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let consumoApiSpy: jasmine.SpyObj<ConsumoApiService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let alertServiceSpy: jasmine.SpyObj<AlertService>;

  beforeEach(waitForAsync(() => {
    consumoApiSpy = jasmine.createSpyObj('ConsumoApi', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['alert']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [RouterTestingModule],
      providers: [
        { provide: ConsumoApiService, useValue: consumoApiSpy },
        { provide: Router, useValue: routerSpy },
        { provide: AlertService, useValue: alertServiceSpy }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call login and navigate on successful login', () => {
    const mockUsuario = { id:"",nombre:"",usuario:"",contraseña:"",tipo:"",rut:"",email:"",carrera:"",apellidop:"" };
    const mockResponse = new HttpResponse({ status: 200, body: mockUsuario });
    consumoApiSpy.login.and.returnValue(of(mockResponse));

    component.ingresar();

    expect(consumoApiSpy.login).toHaveBeenCalledWith('d.cares', 'd.cares');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/loading'], jasmine.objectContaining({
      state: jasmine.objectContaining({
        id: mockUsuario,
        nombre : mockUsuario.nombre,
        usuario: mockUsuario.usuario,
        contraseña : mockUsuario.contraseña,
        tipo: mockUsuario.tipo,
        rut: mockUsuario.rut,
        email: mockUsuario.email,
        carrera: mockUsuario.carrera,
        apellidop: mockUsuario.apellidop 
      }),
    }));
  });

  it('should call alert on login error with status 401', () => {
    const errorResponse = { status: 401 };
    consumoApiSpy.login.and.returnValue(throwError(errorResponse));

    component.ingresar();

    expect(consumoApiSpy.login).toHaveBeenCalledWith('usuario', 'contraseña');
    expect(alertServiceSpy.alert).toHaveBeenCalled();
  });

  // Agrega más pruebas según sea necesario
});
