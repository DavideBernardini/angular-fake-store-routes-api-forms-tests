import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/Products.service';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  isloading: boolean;

  constructor(
    private productService: ProductService,
    ) {
    this.products = [];
    this.isloading = false;
  }

  ngOnInit(): void {

    this.isloading = true;

    this.productService.fetchProducts().pipe(delay(2000)).subscribe((products: Product[]) => {
      this.products = products;
      this.isloading = false;
    });
  }

}
