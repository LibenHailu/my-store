import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Product[]>('http://0.0.0.0:3000/products');
  }
  getProduct(id: string) {
    return this.http.get<Product>(`http://0.0.0.0:3000/products/${id}`);
  }
}
