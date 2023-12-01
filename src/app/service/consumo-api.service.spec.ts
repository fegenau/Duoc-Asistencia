
import { TestBed } from '@angular/core/testing'; 
import { ConsumoApiService } from './consumo-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConsumoApiService', () => {
  let service: ConsumoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConsumoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
