import { TestBed } from '@angular/core/testing';

import { ConsumoApiService } from './consumo-api.service';

describe('ConsumoApiService', () => {
  let service: ConsumoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('login() ok', () => {
    const usuario = 'test';
    const password = 'test';
    service.login(usuario, password).subscribe(
      (response) => {
        expect(response.status).toEqual(200);
      }
    )
  })
});
