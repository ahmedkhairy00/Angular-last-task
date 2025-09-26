import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { mustMatch } from '../../Validators/confirmPasswordValidator';
import { NgClass  } from '@angular/common';
import { CardRegisterComponent } from "../card-register/card-register.component";

@Component({
  selector: 'app-user-registration',
  standalone: true, // if you're using Angular standalone components
  imports: [ReactiveFormsModule, NgClass, CardRegisterComponent],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'], // <-- should be plural `styleUrls`
})
export class UserRegistrationComponent {
  formRegistar: FormGroup;
  userReigesterData !: {
    fullName : string,
    email : string,
    mobile : string,
    password : string,
    confirmPassword : string
  } | null;

  constructor() {
    this.formRegistar = new FormGroup(
      {
        fullName: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
        mobileNumber1: new FormControl('', [
          Validators.required,
          Validators.minLength(11),
          Validators.pattern(/^(010|011|012|015)[0-9]{8}$/),
        ]),
       
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: mustMatch('password', 'confirmPassword') } // ✅ Correct place for cross-field validator
    );
  }

  onSubmit() {
    if (this.formRegistar.valid) {
      console.log('Form Values:', this.formRegistar.value);
      this.userReigesterData = this.formRegistar.value;
    } else {
      console.log('Form Invalid');
      this.formRegistar.markAllAsTouched(); // mark all fields when submit clicked
    }
  }

  resetForm() {
    this.formRegistar.reset();
      this.userReigesterData = null;
  }
}
