import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from '@angular/router';
import {PreregisterFomPresenter} from '../../common/presenters/preregisterFomPresenter';
import {UserStorageService} from '../../common/services/user-storage.service';
import {showToaster} from '../../common/utils/notification.utils';

@Component({
  selector: 'app-pre-register',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './pre-register.component.html',
  styleUrl: './pre-register.component.css'
})
export class PreRegisterComponent {
  constructor(public preregisterFomPresenter: PreregisterFomPresenter,
              private userStorageService: UserStorageService,
              private router: Router,
              ){}

  continueRegister(){
    const data = this.preregisterFomPresenter.preregisterForm.value;
    if(this.userStorageService.isEmailRegistered(data.email)){
      showToaster('Advertencia','El correo ya esta registrado','warning');
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 500);
    } else {
      this.router.navigate(['register', data.email]);
    }
  }
}
