import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsumoApiService } from '../service/consumo-api.service';
import { LoginPage } from './login.page';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { usuario } from '../modelos/usuarios';
import { ActivatedRoute, Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let consumoApiSpy: jasmine.SpyObj<ConsumoApiService>; // Objeto espía para el servicio

  beforeEach( () => {
    consumoApiSpy = jasmine.createSpyObj('ConsumoApiService', ['login']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ConsumoApiService, useValue: consumoApiSpy },
        { provide: ActivatedRoute, useValue: { 
          snapshot: 
          { paramMap: 
            { post: () => 'fr.egenau' } } } }, // Aquí se añade ActivatedRoute
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

it('should navigate to /loading on successful login', () => {
  // Configura la respuesta simulada del servicio
  const mockUser = new usuario();
  mockUser.usuario = 'fr.egenau';
  mockUser.email = 'test@example.com';
  mockUser.nombre = 'Test User';
  mockUser.tipo = 1;
  mockUser.rut = 'Test Rut';
  mockUser.carrera = 'Test Carrera';
  mockUser.apellidop = 'Test Apellido';

  const mockResponse = new HttpResponse({ body: mockUser, status: 200 });
  consumoApiSpy.login.and.returnValue(of(mockResponse));

  // Obtiene una instancia del servicio Router
  const router = TestBed.inject(Router);

  // Espía el método navigate del router
  const navigateSpy = spyOn(router, 'navigate');

  // Llama a la función que quieres probar
  component.usuario.setValue({
    usuario: 'fr.egenau',
    contraseña: 'fr.egenau',
  });
  component.ingresar();

  // Expectativas
  expect(consumoApiSpy.login).toHaveBeenCalledWith(
    'fr.egenau',
    'fr.egenau'
  );
  expect(navigateSpy).toHaveBeenCalledWith(['/loading'], {
    state: {
      id: mockUser,
      usuario: mockUser.usuario,
      email: mockUser.email,
      nombre: mockUser.nombre,
      tipo: mockUser.tipo,
      rut: mockUser.rut,
      carrera: mockUser.carrera,
      apellidop: mockUser.apellidop,
    },
  });
});
//it('should call alert on 401 response', () => {
// Configura la respuesta simulada del servicio
//const mockResponse = new HttpResponse({
//  body: new usuario(),
//  status: 401,
//});
//consumoApiSpy.login.and.returnValue(of(mockResponse));
// Espía el método alert
//const alertSpy = spyOn(component, 'alert');
// Llama a la función que quieres probar
//component.usuario.setValue({
//usuario: 'fr.egenau',
//  contraseña: 'fr.egenau',
//});
//component.ingresar();

//// Expectativas
//expect(consumoApiSpy.login).toHaveBeenCalledWith(
//  'fr.egenau',
//  'fr.egenau'
//);
////expect(alertSpy).toHaveBeenCalled();
});
//});

//import { TestBed } from '@angular/core/testing';
//import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { LoginPage } from './login.page';
//import { ConsumoApiService } from '../service/consumo-api.service';
//
//describe('LoginPage', () => {
//  let component: LoginPage;
//
//  beforeEach(async () => {
//    await TestBed.configureTestingModule({
//      declarations: [ LoginPage ],
//      imports: [ HttpClientTestingModule ],
//      providers: [ ConsumoApiService ]
//    })
//    .compileComponents();
//
//    // Crea una instancia del componente
//    const fixture = TestBed.createComponent(LoginPage);
//    component = fixture.componentInstance;
//  });
//
//  it('should create', () => {
//    // Verifica si el componente se ha creado
//    expect(component).toBeTruthy();
//  });
//
//  // Aquí puedes agregar más pruebas it según sea necesario
//});