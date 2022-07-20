import { Component, OnInit } from '@angular/core';
import { FetchedProductsService } from 'src/app/services/fetched-products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private fetchedProducts: FetchedProductsService) { }

  getProducts() {
    return this.fetchedProducts;
  }

  ngOnInit(): void {
    this.fetchedProducts.productsFetcher();
  }

}
