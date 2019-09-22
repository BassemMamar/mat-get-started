import { Component, OnInit } from '@angular/core';
import { ShopItem } from '../model/shop-item';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  shopItem: ShopItem;
  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(data => this.shopItem = data);
  }

}
