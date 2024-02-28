import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() productsList: Product[];
  @Output() value = new EventEmitter<string>();
  category: string;
  categories: string[] = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
  ];

  constructor() {}
  setCategory(item: string) {
    if (item == undefined) {
      this.value.emit('5');
    }
    this.category = item;
    this.value.emit(this.category);

    if (this.category == 'Category 1') {
      this.value.emit('1');
    }
    if (this.category == 'Category 2') {
      this.value.emit('2');
    }
    if (this.category == 'Category 3') {
      this.value.emit('3');
    }
    if (this.category == 'Category 4') {
      this.value.emit('4');
    }
  }
}
