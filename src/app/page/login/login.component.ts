import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormPresenter} from '../../common/presenters/loginFormPresenter';
import {CookiesService} from '../../common/services/cookies.service';
import {IUser} from '../../common/types/user.interface';
import {Router} from '@angular/router';

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
              private router: Router,) {
  }

  loggerIn(){
    const data:IUser = this.loginFormPresenter.loginForm.value;
    const token = this.cookieService.createToken(data.email);
    this.cookieService.setCookie('authToken', token, 5);
    this.router.navigate(['home']);
  }
}
