import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = ['Mohibur', 'Mamun', 'Hasan'];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  categoriesClick() {
    this.router.navigate(['/categories']);
  }

  addUser() {
    this.userService.addUser();
  }
}
