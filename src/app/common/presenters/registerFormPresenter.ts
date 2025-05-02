import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RegisterFormPresenter {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

}
