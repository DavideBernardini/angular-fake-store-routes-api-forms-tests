import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from 'src/app/services/Products.service';

import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[];
  product: Product;
  productID: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.products = [];
    this.productID = 0;
    this.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      image: '',
      category: ''
    };
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => this.productID = params['id']);

    this.productService.fetchProducts().subscribe((products: Product[]) => {
      this.products = products;
    });

  }
}
