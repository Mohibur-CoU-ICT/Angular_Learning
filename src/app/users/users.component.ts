import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-users]',
  templateUrl: './users.component.html',
  styles: [`
    h3 {
      color: red;
    }
  `]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
