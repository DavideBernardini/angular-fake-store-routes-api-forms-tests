import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/fetched-product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: any[];
  isloading: boolean;

  constructor(private productService: ProductService) {
    this.products = [];
    this.isloading = false;
  }

  ngOnInit(): void {

    this.isloading = true;

    this.productService.fetchProducts().subscribe((products: any) => {
      this.products = products;
      this.isloading = false;
    });
  }

}
