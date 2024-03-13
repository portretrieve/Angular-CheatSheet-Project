import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  templateUrl: './temp-ref-var.component.html',
  styleUrls: ['./temp-ref-var.component.css'],
})
export class TempRefVarComponent {
  @ViewChild('myForm') form: any;
  show() {
    console.log(this.form);
  }
}
