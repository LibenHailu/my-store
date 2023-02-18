import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts: Cart[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.carts = this.cartService.getAllCarts();
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = this.carts.reduce((acc: number, cart: Cart) => {
      return acc + cart.price * Number(cart.quantity);
    }, 0);
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }
  onChange(id: number, event: any) {
    const val = event.target.value;
    const cartIdx = this.carts.findIndex((cart) => cart.id == id);
    if (val === '0') {
      console.log(val);
      this.carts.splice(cartIdx, 1);
    } else {
      this.carts[cartIdx].quantity = val;
    }
    this.cartService.addToCart(this.carts);
    this.calculateTotalPrice();
  }

  onCheckout(fullName: string): void {
    console.log(fullName);
    this.cartService.addToCart([]);
    this.router.navigateByUrl(`checkout/${fullName}/${this.totalPrice}`);
  }
}
