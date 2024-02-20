import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiSearchComponent } from './kaspi-search.component';

describe('KaspiSearchComponent', () => {
  let component: KaspiSearchComponent;
  let fixture: ComponentFixture<KaspiSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaspiSearchComponent]
    });
    fixture = TestBed.createComponent(KaspiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
