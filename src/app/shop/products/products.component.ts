import { Component, OnInit } from '@angular/core';
import { ShopItem } from '../model/shop-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  shopItems: ShopItem[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log('products');
    this.productService.getProducts()
      .subscribe(data => this.shopItems = data);
  }

}
