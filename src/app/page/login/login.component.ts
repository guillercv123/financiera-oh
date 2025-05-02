import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormPresenter} from '../../common/presenters/loginFormPresenter';
import {CookiesService} from '../../common/services/cookies.service';
import {IUser} from '../../common/types/user.interface';
import {Router} from '@angular/router';
import {UserStorageService} from '../../common/services/user-storage.service';
import {showToaster} from '../../common/utils/notification.utils';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public loginFormPresenter: LoginFormPresenter,
              private cookieService:CookiesService,
              private userStorage:UserStorageService,
              private router: Router,) {
  }

  loggerIn(){
    const data:IUser = this.loginFormPresenter.loginForm.value;
    if(this.validateEmailAndPassword(data.email, data.password)){
      const token = this.cookieService.createToken(data.email);
      this.cookieService.setCookie('authToken', token, 5);
      this.router.navigate(['home']);
    } else {
      !this.validateEmail(data.email) ?
        showToaster('Advertencia', 'Email no existe', 'warning'):
        showToaster('Error', 'Contraseña invalida!', 'error');
    }
  }

  validateEmailAndPassword(email:string, password:string): boolean{
    const users:IUser[] = this.userStorage.getUsers();
    return users.some(user =>  user.email===email && user.password===password );
  }

  validateEmail(email:string): boolean{
    const users:IUser[] = this.userStorage.getUsers();
    return users.some(user =>  user.email===email);
  }

  redirectToPreRegister(){
    this.router.navigate(['pre-register']);
  }
}
