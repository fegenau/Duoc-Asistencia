import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EstudiantePage } from './estudiante.page';

describe('EstudiantePage', () => {
  let component: EstudiantePage;
  let fixture: ComponentFixture<EstudiantePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
