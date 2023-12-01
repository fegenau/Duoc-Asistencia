import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuEstudiantePage } from './menu-estudiante.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// Importa el servicio BarcodeScanner y su tipo

import { BarcodeScannerMock } from './barcode-scanner.mock';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
;  // Asegúrate de tener un mock para BarcodeScanner

describe('MenuEstudiantePage', () => {
  let component: MenuEstudiantePage;
  let fixture: ComponentFixture<MenuEstudiantePage>;

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => '123',
      },
    },
    queryParams: of({}),
    setParamMap: (paramMap: any) => {
      activatedRouteStub.snapshot.paramMap = paramMap;
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuEstudiantePage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: BarcodeScanner, useValue: BarcodeScannerMock },
      ],
      imports: [ 
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
