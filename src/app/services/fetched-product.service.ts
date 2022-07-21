import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(private httpClient: HttpClient) {
	}

  fetchProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://fakestoreapi.com/products').pipe(delay(2000));
  }
}
