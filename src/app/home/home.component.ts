import { Component } from '@angular/core';
import { HardcodedAuthServiceService } from '../Services/hardcoded-auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private hardCodedAuthService: HardcodedAuthServiceService) {}

  autoLoginAndAccess() {
    this.hardCodedAuthService.autoAuthenticate();
  }
}
