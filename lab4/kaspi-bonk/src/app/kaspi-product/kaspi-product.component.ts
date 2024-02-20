import { Component } from '@angular/core';

interface Product{
  title: string,
  img: string;
}


@Component({
  selector: 'app-kaspi-product',
  templateUrl: './kaspi-product.component.html',
  styleUrls: ['./kaspi-product.component.scss']
})
export class KaspiProductComponent {
  products:Product[];
  constructor(){
    this.products = [
      {
        title: "Телефоны и гаджеты",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/b698f0a2-59ab-4b91-9bbe-08714373be5a-Phone.png"
      }, 
      {
        title: "Бытовая техника",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/be5d3776-1758-4869-940c-aa703bc5dca6-Home%20App.png"
      },
      {
        title: "ТВ, Аудио, Видео",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/4cd61e8e-7faa-4276-8aaf-44380e0c145d-TV.png"
      },
      {
        title: "Компьютеры",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/2e1540b8-0546-4741-acc4-447c0df3a981-Computer.png"
      },
      {
        title: "Товары для дома",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/d0f757ed-1d94-46c1-870b-010c3136b9ea-Home.png"
      },
      {
        title: "Красота, здоровье",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/362c1530-38f2-4bfa-b65d-0d4e84f73f5e-Beauty.png"
      },
      {
        title: "Детские товары",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/97a54c52-1572-4410-95e8-7027fc0464de-Kids.png"
      },
      {
        title: "Аптека",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/bb49a17d-93d1-4428-93d0-9c2ead66fe23-Pharmacy.png"
      },
      {
        title: "Автотовары",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/2eac5475-390e-484c-8dc9-a3b3a6758abf-Avto.png"
      },
      {
        title: "Спорт, туризм",
        img: "https://resources.cdn-kaspi.kz/shop/static/main-nav/8d543f62-86f7-42ce-81cc-81583b4ab5df-Sport-summer.png"
      },
    ]
  }
}
