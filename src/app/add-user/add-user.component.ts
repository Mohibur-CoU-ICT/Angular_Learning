import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() userNameEE = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addUser(input: HTMLInputElement) {
    this.userNameEE.emit(input.value);
  }

}
