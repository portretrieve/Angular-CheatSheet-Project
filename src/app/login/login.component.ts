import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthServiceService } from '../Services/hardcoded-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  invalidMessage = 'Invalid Credentials';
  invalidLogin = false;
  isUserLoggedIn = false;

  constructor(
    private router: Router,
    private hardAuthservice: HardcodedAuthServiceService
  ) {}

  handleLogin() {
    if (this.hardAuthservice.authenticate(this.username, this.password)) {
      this.isUserLoggedIn = true;
      this.router.navigate(['home']);
    } else {
      this.invalidLogin = true;
    }

    console.log(this.username, this.password);
  }

  // handleBasicAuthLogin() {
  //   this.basicAuthService
  //     .executeBasicAuthService(this.username, this.password)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.invalidLogin = false;
  //         this.isUserLoggedIn = true;
  //         this.router.navigate(['welcome', this.username]);
  //       },
  //       (error) => {
  //         this.invalidLogin = true;
  //       }
  //     );
  // }

  // handleJWTAuthLogin() {
  //   this.basicAuthService
  //     .executeJWTAuthService(this.username, this.password)
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.invalidLogin = false;
  //         this.isUserLoggedIn = true;
  //         this.router.navigate(['welcome', this.username]);
  //       },
  //       (error) => {
  //         this.invalidLogin = true;
  //       }
  //     );
  // }
}
