import { Component } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[];
  constructor(){
    this.products = [...products];
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  WP(){
    window.open("https://wa.me/87784889008", '_blank');
  }
  TG(){
    window.open("https://t.me/sevenstragen", '_blank');
  }
}
