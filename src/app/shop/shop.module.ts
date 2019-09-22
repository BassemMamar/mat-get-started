import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    RatingModule
  ]
})
export class ShopModule { }
