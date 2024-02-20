import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiProductComponent } from './kaspi-product.component';

describe('KaspiProductComponent', () => {
  let component: KaspiProductComponent;
  let fixture: ComponentFixture<KaspiProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaspiProductComponent]
    });
    fixture = TestBed.createComponent(KaspiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
