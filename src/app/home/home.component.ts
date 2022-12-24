import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';

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
    });

    let customObservable = Observable.create((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.intervalSubscription = customObservable.subscribe((count: number) => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
