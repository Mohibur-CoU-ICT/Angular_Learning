import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input('user') userName!: string;
  @Input() name!: string;

  constructor() {
    console.log('constructor of UserComponent called.');
  }

  ngOnInit(): void {
    console.log('ngOnInit of UserComponent called.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges of UserComponent called.', changes);
  }

}