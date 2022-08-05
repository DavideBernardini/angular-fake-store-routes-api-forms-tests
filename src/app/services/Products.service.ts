import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

import { Product } from './interfaces/Product';
@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(private httpClient: HttpClient) {
	}

  fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products').pipe(delay(2000));
  }

  fetchProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`https://fakestoreapi.com/products/${id}`).pipe(delay(100));
  }

  createProduct(newProduct: Omit<Product, 'id' | 'image'>): Observable<Omit<Product, 'id' | 'image'>> {
    return this.httpClient.post<Omit<Product, 'id' | 'image'>>('https://fakestoreapi.com/products', newProduct)
  }
}
