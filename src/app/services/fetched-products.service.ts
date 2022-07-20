import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class FetchedProductsService {

	products: any[];

	constructor(private httpClient: HttpClient) {
		this.products = []
	}

  productsFetcher(): void {
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((response: any) => {
      this.products = response;
    })
  }
}
