import { Component, inject } from '@angular/core';
import { ObservableDataService } from '../Services/observable-data.service';
import { Observer, Subscription, filter, map } from 'rxjs';
import { JSONPlaceholderDataService } from '../Services/json-placeholder-data.service';
import { Post } from './Post';

@Component({
  selector: 'app-learn-observable',
  templateUrl: './learn-observable.component.html',
  styleUrls: ['./learn-observable.component.css'],
})
export class LearnObservableComponent {
  private observableDataService = inject(ObservableDataService);
  private jsonPlaceholderDataService = inject(JSONPlaceholderDataService);

  ngOnInit() {
    console.log(this.postsArray);
    console.log(this.streamingNumber);
  }

  // Dealing with an Observable sending Data Once
  // postsArray: Array<Post> = new Array<Post>();
  postsArray: Post[] = [];
  postsSubscription: Subscription;
  fetchPosts() {
    this.postsSubscription = this.jsonPlaceholderDataService
      .getAllPostsFromPlaceholderApi()
      .subscribe((data) => {
        for (let index = 0; index < 3; index++) {
          this.postsArray.push(data[index]);
        }
        console.log(this.postsArray);
      });
  }

  reset() {
    this.postsArray = [];
  }

  // Dealing with an Observable Streaming Data

  streamingNumber: number = 0;
  streamingNumberSubscription: Subscription;

  startNumberStream() {
    // Fetching the Observable
    const numberStreamingObservable =
      this.observableDataService.getStreamOfNumbersObservable();

    // Using the operators to modify data inside the pipe method of Observable.
    // Operators return the transformed Observable.
    const transformedObservable = numberStreamingObservable.pipe(
      map((num1: any) => num1 * 3),
      filter((num1) => num1 % 2 !== 0)
    );

    // Finally Subscribing the Observable to use data (Obserber)
    this.streamingNumberSubscription = transformedObservable.subscribe(
      (streamingNum) => {
        this.streamingNumber = streamingNum;
      }
    );
  }

  //to Unsubscribe from Streaming number observable subscription
  stopNumberStream() {
    this.streamingNumberSubscription.unsubscribe();
    setTimeout(() => {
      this.streamingNumber = 0;
    }, 2000);
  }

  // ngDoCheck to Unsubscribe from Streaming number observable subscription when streaming Number is more than 50
  ngDoCheck() {
    if (this.streamingNumber > 50) {
      this.stopNumberStream();
    }
  }

  //Unsubscribe from all subscriptions on Component Destruction
  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
    if (this.streamingNumberSubscription) {
      this.streamingNumberSubscription.unsubscribe();
    }
  }
}
