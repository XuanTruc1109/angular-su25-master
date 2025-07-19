import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product = [
    {
      id: 1,
      name: 'Dây chuyền bạc nữ đính đá CZ cá tiên YU_831944',
      price: 1023000,
      image:
        '/image/Daychuyen/Day-chuyen-bac-nu-phong-cach-co-trang-CZ-LILI_831944_1.jpg',
      inStock: true,
    },
    {
      id: 2,
      name: 'Lắc tay bạc Ta S999 nữ cỏ 4 lá cách điệu đẹp YU_661577',
      price: 1187000,
      image:
        '/image/lactay/Lac-tay-bac-nu-co-4-la-cach-dieu-LILI_661577_6-768x768.jpg',
      inStock: true,
    },
    {
      id: 3,
      name: 'Nhẫn bạc nữ mạ vàng 18k đính đá CZ hình trái tim YU_349632',
      price: 726000,
      image:
        '/image/nhan/Nhan-bac-ma-vang-18k-dinh-da-Zircon-hinh-trai-tim-LILI_349632-02.jpg',
      inStock: true,
    },
    {
      id: 4,
      name: 'Lắc tay bạc nữ cá tính mắt xích vuông trái tim Strong Heart YU_414788_1',
      price: 1266000,
      image:
        '/image/lactay/Lac-tay-bac-nu-ca-tinh-mat-xich-vuong-trai-tim-Strong-Heart-LILI_414788_1 (1).jpg',
      inStock: true,
    }
  ]
}
