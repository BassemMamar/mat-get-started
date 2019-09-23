import { NgModule } from '@angular/core';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RatingModule } from 'ng-starrating';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    ShopRoutingModule,
    SharedModule,
    RatingModule
  ]
})
export class ShopModule { }
