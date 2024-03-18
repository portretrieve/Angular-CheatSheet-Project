import { Component } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';
import { HttpService } from '../Services/http.service';
import { filter, map } from 'rxjs/operators';
import { from, interval } from 'rxjs';
import { HardcodedAuthServiceService } from '../Services/hardcoded-auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private userDataService: UserDataService,
    private httpService: HttpService,
    private hardCodedAuthService: HardcodedAuthServiceService
  ) {}

  data: number[];

  ngOnInit() {
    // Fetching Data from Service acting like Data Repo
    // let countries = this.userDataService.getAllUsers();
    // console.log(countries);

    let obs = interval(1);

    from([1, 2, 3, 4, 5])
      .pipe(
        filter((data) => {
          return data > 4;
        }),
        map((data) => {
          return data * 2;
        })
      )

      .subscribe((data) => {
        console.log(data);
        this.data.push(data);
      });

    // this.httpService.getAllUsers()
    // .subscribe()
  }

  autoLoginAndAccess() {
    this.hardCodedAuthService.autoAuthenticate();
  }
}
