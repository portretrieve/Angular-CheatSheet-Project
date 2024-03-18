import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  getAllUsers() {
    return [
      {
        id: 101,
        country: 'India',
        capital: 'Delhi',
      },

      {
        id: 102,
        country: 'China',
        capital: 'Beijing',
      },
      {
        id: 103,
        country: 'USA',
        capital: 'Washington',
      },
    ];
  }
}
