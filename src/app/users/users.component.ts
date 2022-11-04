import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  users: string[] = [];
  
  constructor() {
  }

  addUser(userName: string) {
    this.users.push(userName);
  }

  ngOnInit(): void {
  }

}
