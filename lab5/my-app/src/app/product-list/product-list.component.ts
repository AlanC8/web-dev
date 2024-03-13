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
  filtered: Product[]
  constructor() {
    this.products = [...products];
  }
  clickCategory(value: string) {
    this.categoryType = value;
    this.filtered = products.filter(e => e.category == +value)
  }
  getProductList(): Product[] {
    return products;
  }
}
