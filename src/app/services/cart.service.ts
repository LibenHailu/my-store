import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Cart[]): void {
    window.localStorage.setItem('carts', JSON.stringify(product));
  }
  getAllCarts(): Cart[] {
    const carts = window.localStorage.getItem('carts');
    return carts ? JSON.parse(carts) : [];
  }
}
