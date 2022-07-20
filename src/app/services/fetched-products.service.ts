import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class FetchedProductsService {

	products: any[];

	constructor(public httpClient: HttpClient) {
		this.products = []
	}

  productsFetcher(): void {
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((response: any) => {
      this.products = response;
    })
  }
}
