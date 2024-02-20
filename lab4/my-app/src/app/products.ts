export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 512Gb черный',
    price: 729670,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.7 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 6-ядерный Apple A17 Pro
    объем встроенной памяти: 512.0 ГБ
    емкость аккумулятора: 4422.0 мАч`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h5d/h99/83559839367198.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-chernyi-106363295/?c=750000000',
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 413343,
    description: `диагональ экрана: 13.3 дюйм
    процессор: Apple M1
    видеокарта: Apple M1 7 core
    размер оперативной памяти: 8.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
  },
  {
    id: 3,
    name: 'Ноутбук Apple MacBook Air 15 2023 MQKW3 синий',
    price: 587999,
    description: `диагональ экрана: 15.3 дюйм
    процессор: Apple M2
    видеокарта: Apple M2
    размер оперативной памяти: 8.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000',
  },
  {
    id: 4,
    name: 'Ноутбук Apple MacBook Pro 14 MRX33 черный',
    price: 1020798,
    description: `диагональ экрана: 14.2 дюйм
    процессор: Apple M3 Pro
    видеокарта: Apple M3 Pro 14-Core
    размер оперативной памяти: 18.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 512.0 Гб`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000',
  },
  {
    id: 5,
    name: 'Apple MacBook Pro 14 2023 MRX83 серебристый',
    price: 1927808,
    description: `диагональ экрана: 14.2 дюйм
    видеокарта: Apple M3 Max
    размер оперативной памяти: 36.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 1024.0 Гб`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h70/h85/84523161878558.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mrx83-serebristyi-114694309/?c=750000000',
  },
  {
    id: 6,
    name: 'Миксер Orvica ORM-207s черный',
    price: 25900,
    description: `тип: стационарный
    мощность: 1500.0 Вт
    число скоростей: 6
    турборежим: Нет
    цвет: черный`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/64243772850206.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/orvica-orm-207s-chernyi-102936560/?c=750000000',
  },
  {
    id: 7,
    name: 'ARIBA Осло 3Ф-2Я диван, обивка ткань, 94x290x165, желтый',
    price: 547000,
    description: `механизм трансформации: пантограф
    обивка: ткань
    высота: 94.0 см
    ширина: 290.0 см
    глубина: 165.0 см
    цвет: желтый
    страна: Казахстан`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h94/63781607145502.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/ariba-oslo-3f-2ja-divan-obivka-tkan-94x290x165-zheltyi-100692233/?c=750000000',
  },
  {
    id: 8,
    name: 'Dior Backstage Eye Palette 002 Cool Neutrals',
    price: 32000,
    description: `текстура: прессованные
    финиш: шиммер
    цвет: розовый
    страна производства: Франция`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h98/h5b/64792575148062.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/dior-backstage-eye-palette-002-cool-neutrals-105577829/?c=750000000',
  },
  {
    id: 9,
    name: 'Romand Glasting Melting Balm 05 Nougat Sand блеск для губ коричневый',
    price: 3494,
    description: `тип: блеск для губ
    эффект: глянцевый, ,сияющий
    уФ-защита: Нет
    цвет: коричневый
    страна производства: Южная Корея`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h50/ha0/70294338699294.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/romand-glasting-melting-balm-05-nougat-sand-blesk-dlja-gub-korichnevyi-109457059/?c=750000000',
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 14 Pro Max 1Tb черный',
    price: 744874,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы
    диагональ: 6.7 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A16 Bionic
    объем встроенной памяти: 1024.0 ГБ
    емкость аккумулятора: 4300.0 мАч`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h63/h0a/64428188729374.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-chernyi-106363295/?c=750000000',
  },
];
