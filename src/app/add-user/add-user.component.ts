import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [LoggingService]
})
export class AddUserComponent implements OnInit {

  @Output() userNameEE = new EventEmitter<string>();
  @ViewChild('userInput') userInput!: ElementRef;

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userNameEE.emit(this.userInput.nativeElement.value);
    this.loggingService.logToConsole('user is added with name : ' + this.userInput.nativeElement.value);
  }

}
