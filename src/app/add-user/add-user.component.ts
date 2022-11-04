import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() userNameEE = new EventEmitter<string>();
  @ViewChild('userInput') userInput!: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    this.userNameEE.emit(this.userInput.nativeElement.value);
  }

}
