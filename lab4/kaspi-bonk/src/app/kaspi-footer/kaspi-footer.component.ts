import { Component } from '@angular/core';

interface Links{
  title: string,
  title_links: string[],
}

@Component({
  selector: 'app-kaspi-footer',
  templateUrl: './kaspi-footer.component.html',
  styleUrls: ['./kaspi-footer.component.scss']
})
export class KaspiFooterComponent {
  links: Links[];
  constructor(){
    this.links = [
      {
        title: "Продукты Kaspi.kz",
        title_links: [
          "Kaspi Gold",
          "Kaspi Gold для ребенка",
          "Kaspi Red",
          "Kaspi Депозит",
          "Кредит на Покупки",
          "Кредит для ИП",
          "Кредит наличными"
        ]
      },
      {
        title: "Сервисы Kaspi.kz",
        title_links: [
          "Магазин",
          "Travel",
          "Платежи",
          "Мой банк",
          "Переводы",
          "Акции",
          "Госуслуги",
          "Объявления",
          "Kaspi Гид",
        ]
      },
      {
        title: "Для Бизнеса",
        title_links: [
          "Kaspi Pay",
          "Бизнес Кредит",
          "Кредит для ИП",
          "Продавать в Интернет-магазине на Kaspi.kz",
          "Принимать платежи с Kaspi.kz",
          "Kaspi Гид",
          "Кабинет продавца",
        ]
      },
      {
        title: "9999 Бесплатно с мобильного",
        title_links: [
          "Пользовательское соглашение",
          "Вакансии",
          "Investor Relations",
          "Договор присоединения",
          "Договор по оказанию услуги доставки",
        ]
      },
    ]
  }
}
