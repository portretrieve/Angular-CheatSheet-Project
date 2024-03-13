import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  name: string = '';
  entertedDate: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Honda',
    model: 'Civic',
    year: 2000,
  };

  a: number = 0.259;
  b: number = 1.3495;

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  onDateChange(event: any) {
    this.entertedDate = event.target.value;
  }

  onAmountChange(value: string) {
    this.amount = parseInt(value);
  }

  onHeightChnage(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChnage(value: string) {
    let newValue = parseFloat(value);

    if (isNaN(newValue)) {
      this.miles = 0;
    } else {
      this.miles = newValue;
    }
  }
}
