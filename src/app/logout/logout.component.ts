import { Component } from '@angular/core';
import { HardcodedAuthServiceService } from '../Services/hardcoded-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private hardAuthService: HardcodedAuthServiceService) {}

  ngOnInit(): void {
    this.hardAuthService.logoutUser();
  }
}
