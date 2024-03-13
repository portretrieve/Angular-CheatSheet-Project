import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  showElement: boolean = false;

  addStyle: boolean = false;

  addClass: boolean = false;

  namesList: string[] = [];

  defaultInputValue: string = 'Default Value';

  addNamesToList() {
    if (this.namesList.length === 0) {
      this.namesList = ['Peter Parkerson', 'John Cornerson', 'Lisa'];
    } else {
      this.namesList = [];
    }
  }
}
