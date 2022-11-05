import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    { "name": "Mohibur", "status": "Active" },
    { "name": "Moshiur", "status": "Active" },
    { "name": "Taif", "status": "Active" },
  ];

  getUsers() {
    return this.users;
  }

  addUser(name: string, status: string) {
    this.users.push({ name, status });
  }

  updateStatus(id: number, status: string) {
    this.users[id].status = status;
  }
}