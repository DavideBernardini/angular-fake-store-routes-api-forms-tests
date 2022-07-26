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

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
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

    this.activatedRoute.params.subscribe(params => {

      this.productService.fetchProducts().subscribe((products: Product[]) => {

        const fetchedProducts: Product[] = products;

        fetchedProducts.forEach(element => {

          if (element.id == params['id'])
            this.product = element;
        });
      });
    });

    console.log(this.product);

  }
}
