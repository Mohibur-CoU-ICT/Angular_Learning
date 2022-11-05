import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class UserService {

  private users = [
    { "name": "Mohibur", "status": "Active" },
    { "name": "Moshiur", "status": "Active" },
    { "name": "Taif", "status": "Active" },
  ];

  constructor(private loggingService: LoggingService) {

  }

  getUsers() {
    return this.users;
  }

  addUser(name: string, status: string) {
    this.users.push({ name, status });
    this.loggingService.logToConsole('user added with name : ' + name + ' , status : ' + status);
  }

  updateStatus(id: number, status: string) {
    this.users[id].status = status;
    this.loggingService.logToConsole('status of user with id = ' + id + ' is set to ' + status);
  }
}