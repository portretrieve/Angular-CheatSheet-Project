import { Component, ContentChild, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  childCompCounter: number = 0;

  increaseChildCompCounter() {
    this.childCompCounter++;
  }

  decreaseChildCompCounter() {
    this.childCompCounter--;
  }

  // @ContentChild
  @ContentChild('projectedH5') projectedH5: any;

  // @ContentChildren
  @ContentChildren('projectedH4') projectedH4s: any;

  ngAfterContentInit() {
    // Dealing with all projected H4s
    this.projectedH4s._results.forEach((element: any) => {
      element.nativeElement.setAttribute('style', 'color:red');
    });

    // Dealing with projected H5
    this.projectedH5.nativeElement.setAttribute('style', 'color:green');
  }
}
