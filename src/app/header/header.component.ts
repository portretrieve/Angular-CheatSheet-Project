import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthServiceService } from '../Services/hardcoded-auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  router = inject(Router);
  hardCodedAuthService = inject(HardcodedAuthServiceService);
}
