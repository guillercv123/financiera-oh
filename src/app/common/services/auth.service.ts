import {CookiesService} from './cookies.service';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private logoutTimer: any;
  constructor(
    private cookies: CookiesService,
    private router: Router
  ) {}

  isAuthenticated(): boolean {
    return this.cookies.isTokenValid();
  }

  logout() {
    this.cookies.clearToken();
    clearTimeout(this.logoutTimer);
    this.router.navigate(['login']);
  }
}
