import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName: string = '';
  users: string[] = [];
  
  constructor() {
  }

  addUser() {
    this.users.push(this.userName);
  }

  ngOnInit(): void {
  }

}
