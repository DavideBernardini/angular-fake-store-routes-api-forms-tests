import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/services/interfaces/Product';

@Component({
  selector: 'app-product-form',
  host: {
    class: 'app-product-form'
  },
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  newProductForm: FormGroup;

  constructor() {
    this.newProductForm = new FormGroup({
      id: new FormControl(0, [
        Validators.required,
        Validators.min(0)
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      price: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(99999),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(500),
      ]),
      category: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
    });
  }

  onSubmit() {
    console.log(this.newProductForm.value);
  }

  ngOnInit(): void {
  }

}
