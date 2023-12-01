import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { QrpagePage } from './qrpage.page';

describe('QrpagePage', () => {
  let component: QrpagePage;
  let fixture: ComponentFixture<QrpagePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(QrpagePage);
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

