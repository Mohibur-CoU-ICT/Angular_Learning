import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  @ViewChild('userInput') userInput!: ElementRef;
  userName!: string;
  status: string = 'Active';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.updatedStatus.subscribe((data) => {
      alert(data);
    });
  }

  addUser() {
    this.userService.addUser(this.userName, this.status);
  }

}
