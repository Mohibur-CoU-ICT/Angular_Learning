import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders: string[] = ['male', 'female'];
  restrictedNames: string[] = ['Mamun'];
  signUpForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isRestrictedName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.isRestrictedEmail as AsyncValidatorFn])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  isRestrictedName(control: FormControl): { [s: string]: boolean } | null {
    if (this.restrictedNames.includes(control.value)) {
      return { isNameRestricted: true };
    }
    return null;
  }

  isRestrictedEmail(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ isEmailRestricted: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  addHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  submitForm() {
    console.log(this.signUpForm);
  }
}
