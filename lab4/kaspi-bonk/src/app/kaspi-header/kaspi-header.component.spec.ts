import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiHeaderComponent } from './kaspi-header.component';

describe('KaspiHeaderComponent', () => {
  let component: KaspiHeaderComponent;
  let fixture: ComponentFixture<KaspiHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaspiHeaderComponent]
    });
    fixture = TestBed.createComponent(KaspiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
