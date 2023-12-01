import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AsignaturaPage } from './asignatura.page';

describe('AsignaturaPage', () => {
  let component: AsignaturaPage;
  let fixture: ComponentFixture<AsignaturaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
