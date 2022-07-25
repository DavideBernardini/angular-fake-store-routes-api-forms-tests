import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../interfaces/Product';
@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(private httpClient: HttpClient) {
	}

  fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products').pipe(delay(2000));
  }
}
