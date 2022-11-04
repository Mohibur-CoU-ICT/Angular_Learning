import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
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
