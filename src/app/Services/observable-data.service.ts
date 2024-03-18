import { Injectable } from '@angular/core';
import { Observable, from, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableDataService {
  constructor() {}

  getNumberArrayObservable(): Observable<Number> {
    return from([1, 2, 3, 4, 5]);
  }

  getStringArrayObservable(): Observable<string> {
    return from(['Delhi', 'Mumbai', 'Pune', 'Banglore', 'Goa']);
  }

  getStreamOfNumbersObservable(): Observable<Number> {
    return interval(1);
  }
}
