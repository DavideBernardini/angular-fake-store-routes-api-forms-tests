import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/Products.service';
import { Product } from 'src/app/services/interfaces/Product';
@Component({
  selector: 'app-product-form',
  host: {
    class: 'app-product-form'
  },
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  newProductForm: FormGroup;
  newProduct: Omit<Product, 'id' | 'image'>;

  categories: string[];

  constructor(private productService: ProductService,) {
    this.newProductForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150),
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(500),
      ]),
      category: new FormControl(null, [
        Validators.required
      ]),
    });

    this.categories = [
      "men's clothing",
      "jewelery",
      "electronics",
      "women's clothing"
    ];

    this.newProduct = {
      title: '',
      price: 0,
      description: '',
      category: ''
    }
  }

  onSubmit() {
    // if (this.newProductForm.invalid) {

    //   console.error("Invalid form.");

    //   Object.keys(this.newProductForm.controls).forEach(key => {
    //     console.error(key, this.newProductForm.get(key)?.errors);
    //   });
    // }
    this.newProduct = this.newProductForm.value;

    this.productService.createProduct(this.newProduct).subscribe((res) => {
      console.log(res);
    });
  }
}
