import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoadingPage } from './loading.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LoadingPage', () => {
  let component: LoadingPage;
  let fixture: ComponentFixture<LoadingPage>;

  // Crear un mock de ActivatedRoute
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => '123', // Suponiendo que necesitas un ID de ejemplo
      },
    },
    queryParams: of({}), // Asegúrate de que queryParams sea un Observable
    // Puedes añadir más propiedades según las necesidades de tu componente

    // Agrega un método para cambiar dinámicamente los parámetros de ruta si es necesario
    setParamMap: (paramMap: any) => {
      activatedRouteStub.snapshot.paramMap = paramMap;
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});