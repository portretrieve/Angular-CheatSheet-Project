import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  message: string = 'Default Message';

  array: number[] = [20];

  button1Clicked() {
    this.message = 'Updated Message';
  }

  button2Clicked() {
    this.array.push(10);
  }
}
