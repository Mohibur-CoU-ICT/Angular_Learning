import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders: string[] = ['male', 'female'];
  signUpForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }

  submitForm() {
    console.log(this.signUpForm);
  }
}
