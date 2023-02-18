import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart-form',
  templateUrl: './add-to-cart-form.component.html',
  styleUrls: ['./add-to-cart-form.component.css'],
})
export class AddToCartFormComponent implements OnInit {
  quantity: string = '1';
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0.0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const item = new Cart();
    item.id = this.product.id;
    item.description = this.product.description;
    item.name = this.product.name;
    item.price = this.product.price;
    item.url = this.product.url;
    item.quantity = this.quantity;

    let allCarts = this.cartService.getAllCarts();
    const curIdx = allCarts.findIndex((cart) => cart.id == item.id);
    if (curIdx == -1) {
      allCarts.push({ ...item });
    } else {
      allCarts = allCarts.map((cart) => {
        if (cart.id == item.id) {
          return item;
        } else {
          return cart;
        }
      });
    }
    this.cartService.addToCart(allCarts);
    alert('Added to cart!');
  }
}
