import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {

  @ViewChild('userInput') userInput!: ElementRef;
  userName!: string;
  status: string = 'Active';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userService.addUser(this.userName, this.status);
  }

}
