import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthServiceService {
  constructor() {}

  autoAuthenticate() {
    sessionStorage.setItem('authenticatedUser', 'admin');
  }

  authenticate(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('authenticatedUser') ? true : false;
  }

  logoutUser() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
