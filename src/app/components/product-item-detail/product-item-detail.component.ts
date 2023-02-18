import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.product = {
      id: 1,
      name: '',
      price: 0.0,
      url: '',
      description: '',
    };
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.productService.getProducts().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id === id) {
          this.product = res[i];
        }
      }
    });
  }
}
