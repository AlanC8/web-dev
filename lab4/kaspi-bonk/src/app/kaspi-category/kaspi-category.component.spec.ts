import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiCategoryComponent } from './kaspi-category.component';

describe('KaspiCategoryComponent', () => {
  let component: KaspiCategoryComponent;
  let fixture: ComponentFixture<KaspiCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaspiCategoryComponent]
    });
    fixture = TestBed.createComponent(KaspiCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
