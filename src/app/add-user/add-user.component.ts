import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() userNameEE = new EventEmitter<string>();
  userName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    this.userNameEE.emit(this.userName);
  }

}
