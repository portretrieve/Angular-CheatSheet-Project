import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  // Incoming Data from Parent
  @Input('items') items: any;

  // Sending Data Back to Parent
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  productClicked(itemName: string) {
    this.notify.emit(itemName);
  }
}
