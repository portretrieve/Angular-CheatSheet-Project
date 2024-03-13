import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Phone', price: 100 },
    { id: 2, name: 'Laptop', price: 500 },
    { id: 3, name: 'Pen Drive', price: 50 },
    { id: 4, name: 'Desktop', price: 120 },
  ];

  foods = [
    { id: 1, name: 'Apples', price: 10 },
    { id: 2, name: 'Oranges', price: 5 },
    { id: 3, name: 'Pasta', price: 5 },
    { id: 4, name: 'Pizza', price: 12 },
  ];

  // @ViewChild('projectedH4') h4: ElementRef;

  // ngAfterViewInit() {
  //   console.log(this.h4);
  //   this.h4.nativeElement.setAttribute('style', 'color:green');
  // }

  // Accepting value from Child component

  productName: string = '';

  acceptProductNamefromChild(incomingProductName: string) {
    console.log(incomingProductName);
    this.productName = incomingProductName;
  }
}
