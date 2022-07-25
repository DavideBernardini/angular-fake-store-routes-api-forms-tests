import { ProductService } from 'src/app/services/Products.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Product } from 'src/app/interfaces/Product';

import { ProductsListComponent } from './products-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ProductsListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call fetchProducts and return Product[]', fakeAsync(() => {

    let fixture = TestBed.createComponent(ProductsListComponent);
    let component = fixture.debugElement.componentInstance;

    let productService = fixture.debugElement.injector.get(ProductService);

    const expectedProducts = [
      {
        id: 12,
        title: 'tracolla',
        price: 200,
        description: 'description',
        image: ' https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },

      {
        id: 10,
        title: 'zaino',
        price: 300,
        description: 'description2',
        image: ' https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
    ];

    let stub = spyOn(productService, "fetchProducts").and.callFake(() => {

      return of(expectedProducts).pipe(delay(100))
    })

    component.fetchProducts().subscribe((data: Product[]) => {
      expect(data).toEqual(expectedProducts);
    });;
    expect(component.isloading).toEqual(true);
    tick(100)
    expect(component.isloading).toEqual(false);

    expect(component.products).toEqual(expectedProducts);
  }))
});
