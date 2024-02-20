import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiWelcomeComponent } from './kaspi-welcome.component';

describe('KaspiWelcomeComponent', () => {
  let component: KaspiWelcomeComponent;
  let fixture: ComponentFixture<KaspiWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaspiWelcomeComponent]
    });
    fixture = TestBed.createComponent(KaspiWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
