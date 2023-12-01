import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoadingPage } from './loading.page';

describe('LoadingPage', () => {
  let component: LoadingPage;
  let fixture: ComponentFixture<LoadingPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
