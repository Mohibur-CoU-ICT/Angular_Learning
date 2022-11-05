import { Component, OnInit } from '@angular/core';
import { LogginService } from '../services/logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: string[] = ["Mohibur"];
  name: string = '';
  isAvailable: boolean = true;
  value: number = 10;

  constructor() {
  }

  addUser(userName: string) {
    this.users.push(userName);
  }

  ngOnInit(): void {
  }

  changeName() {
    this.name = "Mohibur Rahman";
    let loggingService = new LogginService();
    loggingService.logToConsole('name is changed to : ' + this.name);
  }

  destroyUserComponent() {
    this.users = [];
  }
}
