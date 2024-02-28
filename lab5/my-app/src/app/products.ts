export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  category?: number;
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
    category: 1
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
    category: 1
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
    category: 1
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
    category: 1
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
    category: 1
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
    category: 2
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
    category: 2
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
    category: 2
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
    category: 2
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
    category: 2
  },
  {
    id: 11,
    name: 'Умная колонка Яндекс Станция Мини 2 с часами YNDX-00020 черный',
    price: 41790,
    description: `суммарная мощность: 10.0 Вт
    управление умным домом: Да
    голосовой помощник: Алиса
    поддерживаемый язык: русский
    поддержка Wi-Fi: Да
    поддержка Bluetooth: Да`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h39/hca/63898629537822.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-yndx-00020-chernyi-102580021/?c=750000000',
    category: 3
  },
  {
    id: 12,
    name: 'Монитор Xiaomi P27QBC-RG черный',
    price: 145898,
    description: `диагональ: 27.0 дюйм
    разрешение: 2560x1440
    тип ЖК-матрицы: IPS
    яркость: 400.0 кд/м2
    время отклика: 1.0 мс
    макс. частота обновления кадров: 165.0 Гц
    входы: HDMI, ,USB Type-C`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha7/hb8/82766909145118.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/xiaomi-p27qbc-rg-chernyi-112485764/?c=750000000',
    category: 3
  },
  {
    id: 14,
    name: 'Планшет Apple iPad Pro 2022 Wi-Fi 11 дюйм 8 Гб/128 Гб серый',
    price: 429557,
    description: `диагональ: 11.0 дюйм
    разрешение экрана: 2388x1668
    технология изготовления экрана: Liquid Retina
    объем оперативной памяти: 8 Гб
    объем встроенной памяти: 128.0 Гб
    беспроводные интерфейсы: Wi-Fi, ,Bluetooth
    емкость аккумулятора: 7538.0 мАч
    цвет: серый`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h15/h91/64895796412446.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-wi-fi-11-djuim-8-gb-128-gb-seryi-107276534/?c=750000000',
    category: 3
  },
  {
    id: 15,
    name: 'Микрофон Hollyland Solidcom C1-6S',
    price: 648807,
    description: `тип: динамический
    конструкция: наголовный
    назначение: универсальный
    тип подключения: беспроводной
    радиосистема: Да
    разъемы: XLR, ,mini jack
    цвет: черный`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h25/h90/67957760000030.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/hollyland-solidcom-c1-6s-108473922/?c=750000000',
    category: 3
  },
  {
    id: 16,
    name: 'Смарт-часы Apple Watch SE 40 мм черный',
    price: 130421,
    description: `поддержка платформ: iOS
    материал корпуса: алюминий
    цвет корпуса: черный
    форма корпуса: прямоугольная
    интерфейсы: Bluetooth, ,Wi-Fi, ,NFC
    технология экрана: OLED
    объем встроенной памяти: 32 Гб
    время работы: до 18 часов`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
    category: 4
  },
  {
    id: 17,
    name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серый',
    price: 140525,
    description: `диагональ: 11.0 дюйм
    разрешение экрана: 1920x1200
    технология изготовления экрана: TFT PLS
    объем оперативной памяти: 8 Гб
    объем встроенной памяти: 128.0 Гб
    беспроводные интерфейсы: Wi-Fi, ,Bluetooth
    емкость аккумулятора: 7040.0 мАч
    цвет: серый`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h4c/84177268703262.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-seryi-113807079/?c=750000000',
    category: 4
  },
  {
    id: 18,
    name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серый',
    price: 140525,
    description: `диагональ: 11.0 дюйм
    разрешение экрана: 1920x1200
    технология изготовления экрана: TFT PLS
    объем оперативной памяти: 8 Гб
    объем встроенной памяти: 128.0 Гб
    беспроводные интерфейсы: Wi-Fi, ,Bluetooth
    емкость аккумулятора: 7040.0 мАч
    цвет: серый`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h4c/84177268703262.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-seryi-113807079/?c=750000000',
    category: 4
  },
  {
    id: 19,
    name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серый',
    price: 140525,
    description: `диагональ: 11.0 дюйм
    разрешение экрана: 1920x1200
    технология изготовления экрана: TFT PLS
    объем оперативной памяти: 8 Гб
    объем встроенной памяти: 128.0 Гб
    беспроводные интерфейсы: Wi-Fi, ,Bluetooth
    емкость аккумулятора: 7040.0 мАч
    цвет: серый`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h4c/84177268703262.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-seryi-113807079/?c=750000000',
    category: 4
  },
  {
    id: 20,
    name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серый',
    price: 140525,
    description: `диагональ: 11.0 дюйм
    разрешение экрана: 1920x1200
    технология изготовления экрана: TFT PLS
    объем оперативной памяти: 8 Гб
    объем встроенной памяти: 128.0 Гб
    беспроводные интерфейсы: Wi-Fi, ,Bluetooth
    емкость аккумулятора: 7040.0 мАч
    цвет: серый`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h4c/84177268703262.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-seryi-113807079/?c=750000000',
    category: 4
  },
  {
    id: 20,
    name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серый',
    price: 140525,
    description: `диагональ: 11.0 дюйм
    разрешение экрана: 1920x1200
    технология изготовления экрана: TFT PLS
    объем оперативной памяти: 8 Гб
    объем встроенной памяти: 128.0 Гб
    беспроводные интерфейсы: Wi-Fi, ,Bluetooth
    емкость аккумулятора: 7040.0 мАч
    цвет: серый`,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h4c/84177268703262.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-seryi-113807079/?c=750000000',
    category: 4
  },
];
