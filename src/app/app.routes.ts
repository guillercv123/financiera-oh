import { Routes } from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {HomeComponent} from './page/home/home.component';
import {PreRegisterComponent} from './page/pre-register/pre-register.component';
import {RegisterComponent} from './page/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'pre-register', component: PreRegisterComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: 'login'},
];
