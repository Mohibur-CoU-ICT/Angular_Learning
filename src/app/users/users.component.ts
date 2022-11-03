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
  userName: string = '';
  users: string[] = [];
  isUserCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  changeUserCreatedStatus() {
    this.isUserCreated = true;
    this.userCreatedStatus = "User is created";
    this.users.push(this.userName);
  }

  onUpdateUser(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
