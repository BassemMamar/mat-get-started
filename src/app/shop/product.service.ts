import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { shopItems } from './mock-data';
import { ShopItem } from './model/shop-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<ShopItem[]> {
    return of(shopItems);
  }

  getProduct(id: string): Observable<ShopItem> {
    return of(shopItems.find(x => x.id === id));
  }
}
