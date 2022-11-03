import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [`
    h3 {
      color: red;
    }
  `]
})
export class UsersComponent implements OnInit {

  allowNewUser = false;
  userCreatedStatus = "No user is created";

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }
  
  changeUserCreatedStatus() {
    this.userCreatedStatus = "User is created";
  }

  ngOnInit(): void {
  }

}
