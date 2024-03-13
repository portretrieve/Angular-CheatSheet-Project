import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css'],
})
export class BindingsComponent {
  // ----------Property Binding----------

  imageUrl: string =
    'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg';
  altString: string = 'Another Nature Image';

  //------- Event Binding------------

  inputValue: string = '';

  message: string = 'Yes, I can use Numbers';
  password: string = '';
  enablePasswordButton: boolean = false;

  // -------- 2 way Binding-----------

  twoWayInputValue: string = '2 Way Binding String';

  onChangeLength(event: any) {
    this.inputValue = event.target.value;
  }

  onButtonClick() {
    this.password = '@#DK%&';
  }
}
