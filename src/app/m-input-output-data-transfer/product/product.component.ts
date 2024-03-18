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
  @Input('items') electronics: any;

  // Sending Data Back to Parent
  @Output()
  emitter: EventEmitter<string> = new EventEmitter<string>();

  productClicked(itemName: string) {
    this.emitter.emit(itemName);
  }
}
