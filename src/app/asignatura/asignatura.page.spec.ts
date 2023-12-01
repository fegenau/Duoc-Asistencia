import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AsignaturaPage } from './asignatura.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AsignaturaPage', () => {
  let component: AsignaturaPage;
  let fixture: ComponentFixture<AsignaturaPage>;

  beforeEach(waitForAsync(() => {
   // Crear un mock de ActivatedRoute
const activatedRouteStub = {
  snapshot: {
    paramMap: {
      get: () => '123', // Suponiendo que necesitas un ID de ejemplo
    },
  },
  queryParams: of({}), // Asegúrate de que queryParams sea un Observable
  // Añade aquí más propiedades según las necesidades de tu componente
};

    TestBed.configureTestingModule({
      declarations: [AsignaturaPage],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
