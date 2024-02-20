import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiFooterComponent } from './kaspi-footer.component';

describe('KaspiFooterComponent', () => {
  let component: KaspiFooterComponent;
  let fixture: ComponentFixture<KaspiFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaspiFooterComponent]
    });
    fixture = TestBed.createComponent(KaspiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
