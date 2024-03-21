import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  countryList = ['India', 'UAE', 'USA'];

  onSubmit(form: NgForm) {
    console.log(form);
    this.resetMyForm(form);
  }

  resetMyForm(myForm: NgForm) {
    myForm.resetForm({
      lastname: 'Default Last Name',
    });
  }
}
