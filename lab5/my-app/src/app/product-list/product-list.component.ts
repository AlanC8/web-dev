import { Component } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[];
  categoryType: string;
  constructor() {
    this.products = [...products];
  }
  clickCategory(value: string) {
    this.categoryType = value;
  }
  getProductList(): Product[] {
    return products;
  }
  getCategoryType() {
    if (this.categoryType == '1') {
      return 1;
    }
    if (this.categoryType == '2') {
      return 2;
    }
    if (this.categoryType == '3') {
      return 3;
    }
    if (this.categoryType == '4') {
      return 4;
    }
    return 5;
  }
}
