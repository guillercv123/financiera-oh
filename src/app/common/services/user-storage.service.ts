import { Injectable } from '@angular/core';
import {IUser} from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private readonly STORAGE_KEY = 'users';
  constructor() { }

  getUsers(): IUser[] {
    const users = localStorage.getItem(this.STORAGE_KEY);
    return users ? JSON.parse(users) as IUser[] : [];
  }

  saveUsers(users: IUser[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }

  addUser(user: IUser): boolean {
    const users = this.getUsers();
    if(this.isEmailRegistered(user.email)) {
      return false;
    }
    users.push(user);
    this.saveUsers(users);
    return true;
  }

  isEmailRegistered(email: string): boolean{
    const users = this.getUsers();
    return users.some((u: IUser) => u.email === email);
  }
}
