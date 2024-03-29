import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  // Accessing own HTML elements
  @ViewChild('myH4') myH4: any;
  @ViewChildren('myParagraph') paragraphs: any;

  ngAfterViewInit() {
    this.myH4.nativeElement.style.color = 'red';
    this.paragraphs._results.forEach((element: any) => {
      element.nativeElement.style.color = 'green';
    });
  }

  // Accessing child Component
  @ViewChild('childComp') childComponent: ChildComponent;

  inc() {
    this.childComponent.increaseChildCompCounter();
  }

  dec() {
    this.childComponent.decreaseChildCompCounter();
  }
}
