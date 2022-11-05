import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [LoggingService]
})
export class UsersComponent implements OnInit {

  users: string[] = ["Mohibur"];
  name: string = '';
  isAvailable: boolean = true;
  value: number = 10;

  constructor(private loggingService: LoggingService) {
  }

  addUser(userName: string) {
    this.users.push(userName);
  }

  ngOnInit(): void {
  }

  changeName() {
    this.name = "Mohibur Rahman";
    this.loggingService.logToConsole('name is changed to : ' + this.name);
  }

  destroyUserComponent() {
    this.users = [];
  }
}
