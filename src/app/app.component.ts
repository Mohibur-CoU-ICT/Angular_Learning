import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular_Learning';
  name = "Mohibur";
  users: { name: string, status: string }[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
