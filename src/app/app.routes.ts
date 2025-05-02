import { Routes } from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {HomeComponent} from './page/home/home.component';
import {PreRegisterComponent} from './page/pre-register/pre-register.component';
import {RegisterComponent} from './page/register/register.component';
import {AuthGuard} from './common/services/auth-guard.service';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'pre-register', component: PreRegisterComponent},
    { path: 'register/:email', component: RegisterComponent},
    { path: '**', redirectTo: 'login'},
];
