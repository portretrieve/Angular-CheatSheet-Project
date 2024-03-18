import { Component, Input } from '@angular/core';

// export interface Notification {
//   getDetails(): string;
// }

export class Notification {
  // public get counter(): number {
  //   return this._counter;
  // }
  // public set counter(value: number) {
  //   this._counter = value;
  // }
  // public get message(): string {
  //   return this._message;
  // }
  // public set message(value: string) {
  //   this._message = value;
  // }
  constructor(message: string, counter: number) {}

  //   getDetails(): string {
  //     return this.message;
  //   }
}

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent {
  notifications: string[] = [];
  counter: number = 1;

  @Input('message') incomingMessage: string;
  @Input('array') myArray: number[];

  addToSequenceList(message: string) {
    this.notifications.push(message);
    this.counter++;
  }

  constructor() {
    this.addToSequenceList('Constructor Called');
  }
  ngOnChanges() {
    this.addToSequenceList(
      'NgOnChanges is called when when the input properties have changed.'
    );
  }
  ngOnInit() {
    this.addToSequenceList('NgOnInit is called on component initialization.');
  }
  ngDoCheck() {
    this.addToSequenceList(
      "NgDoCheck is fired to detect developer's custom change."
    );
  }
  ngAfterContentInit() {
    this.addToSequenceList('ngAfterContentInit Called');
  }
  ngAfterContentChecked() {
    this.addToSequenceList('ngAfterContentChecked Called');
  }
  ngAfterViewInit() {
    this.addToSequenceList('ngAfterViewInit Called');
  }
  ngAfterViewChecked() {
    this.addToSequenceList('ngAfterViewChecked Called');
  }
  ngOnDestroy() {
    this.addToSequenceList(
      'NgOnDestroy is fired before the component is destroyed.'
    );
  }
}
