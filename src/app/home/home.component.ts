import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, } from '@angular/router';
import { filter, map, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe((data: Data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });

    let customObservable = Observable.create((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        if (count > 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error('count is greater than 3');
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    this.intervalSubscription = customObservable.pipe(filter((data: number) => {
      return data > 0;
    }), map((data: number) => {
      return 'count is ' + data;
    })).subscribe((count: number) => {
      console.log(count);
    }, (error: Error) => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
