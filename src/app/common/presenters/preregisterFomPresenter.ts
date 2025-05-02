import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class PreregisterFomPresenter {
  preregisterForm: FormGroup;
  constructor() {
    this.preregisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
}
