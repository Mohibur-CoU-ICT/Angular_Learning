import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('form') signUpForm!: NgForm;
  gender: string = 'male';
  about: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onUserNameInput() {
    console.log(this.signUpForm);
  }

  setValues() {
    // must provide values of all form controls
    this.signUpForm.form.setValue({
      userData: {
        username: 'mohibur',
        email: 'mohibur@gmail.com'
      },
      gender: 'male',
      about: 'love to travel'
    });
  }

  patchValues() {
    // subset or superset of form controls
    this.signUpForm.form.patchValue({
      userData: {
        username: 'habiba',
        email: 'habiba@gmail.com'
      },
      gender: 'female'
    });
  }

  submitForm() {
    console.log(this.signUpForm);
  }

}
