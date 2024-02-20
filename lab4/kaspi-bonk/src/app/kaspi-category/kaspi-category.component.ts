import { Component } from '@angular/core';

@Component({
  selector: 'app-kaspi-category',
  templateUrl: './kaspi-category.component.html',
  styleUrls: ['./kaspi-category.component.scss'],
})
export class KaspiCategoryComponent {
  categorys: string[];
  constructor() {
    this.categorys = [
      'все категории',
      'Телефоны и гаджеты',
      'Бытовая техника',
      'ТВ, Аудио, Видео',
      'Компьютеры',
      'Мебель',
      'Красота, здоровье',
      'Детские товары',
      'Аптека',
    ];
  }
}
