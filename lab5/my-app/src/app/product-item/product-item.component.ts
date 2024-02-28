import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() productItem: Product;
  count: number = 1;
  removed: boolean = true;
  isLiked: boolean = false;
  constructor(){}

  removing(){
    this.removed = !this.removed;
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
  increment(){
    this.count++;
  }

  decrement(){
    if(this.count > 1){
      this.count--;
    }
  } 

  cond(){
    this.isLiked = !this.isLiked;
  }

  getCount(): number{
    return this.count;
  }
}
