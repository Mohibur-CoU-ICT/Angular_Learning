import { Component, OnInit } from '@angular/core';

import { DummyService } from '../services/dummy.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = ['Mohibur', 'Mamun', 'Hasan'];

  constructor(
    private router: Router,
    private userService: UserService,
    private dummyService: DummyService
  ) {}

  ngOnInit(): void {
    this.dummyService.printLog('Hello from UsersComponent');
  }

  categoriesClick() {
    this.router.navigate(['/categories']);
  }

  addUser() {
    this.userService.addUser();
  }
}
