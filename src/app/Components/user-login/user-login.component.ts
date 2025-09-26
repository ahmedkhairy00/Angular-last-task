import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule , FormControl, Validators} from '@angular/forms';
import { CardLoginComponent } from "../card-login/card-login.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule, NgClass, CardLoginComponent, RouterOutlet],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  formLogin !: FormGroup;
  userLoginData: { email: string; password: string } | null = null;  // 👈 inline type
  constructor() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
    })
  }

  onSubmit(){
    console.log( `Login Form Values` , this.formLogin.value);
     
    if(this.formLogin.valid) {
      this.userLoginData = this.formLogin.value;
    }

  }

  onReset(){
    this.formLogin.reset();
    this.userLoginData = null;
  }
}
