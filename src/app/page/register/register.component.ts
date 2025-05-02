import {Component, OnInit} from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {RegisterFormPresenter} from '../../common/presenters/registerFormPresenter';
import {showToaster} from '../../common/utils/notification.utils';
import {IRegisterUser, IUser} from '../../common/types/user.interface';
import {UserStorageService} from '../../common/services/user-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(public registerFormPresenter: RegisterFormPresenter,
              private userStorageService: UserStorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.registerFormPresenter.registerForm.patchValue({ email });
    }
  }
  createUser(): void {
    const user:IRegisterUser = this.registerFormPresenter.registerForm.value;
    if(user.password !== user.confirmPassword) {
      showToaster('Advertencia','Las contraseñas no coinciden','warning');
      return;
    }
    const userNew : IUser = {
      fullName: user.fullName,
      password: user.password,
      email: user.email,
    }
    const register = this.userStorageService.addUser(userNew);
    if(register){
      showToaster('Exitoso','Usuario registrado con éxito','success');
      this.router.navigate(['/login']);
    } else {
      showToaster('Fallido','Usuario con correo registrado','error');
    }
  }
}
