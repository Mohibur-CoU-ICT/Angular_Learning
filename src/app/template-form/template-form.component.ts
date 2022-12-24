import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('form') signUpForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onUserNameInput() {
    console.log(this.signUpForm);
  }

  submitForm() {
    console.log(this.signUpForm);
  }

}
