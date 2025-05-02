import { Injectable } from '@angular/core';
interface TokenPayload {
  user: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  createToken(email: string): string{
    const payload = {
      user: email,
      exp: Date.now() + 5 * 60 * 1000,
    };
    return btoa(JSON.stringify(payload));
  }

  setCookie(name: string, value: string, minutes: number) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/; Secure; SameSite=Strict`;
  }

  getCookie(name: string): string | null {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  decodeToken(token: string): TokenPayload | null {
    try {
      const json = atob(token);
      return JSON.parse(json) as TokenPayload;
    } catch {
      return null;
    }
  }

  isTokenValid(name = 'authToken'): boolean {
    const token = this.getCookie(name);
    if (!token) return false;

    const payload = this.decodeToken(token);
    if (!payload) return false;

    return Date.now() < payload.exp;
  }

  clearToken(name = 'authToken'): boolean {
    const had = !!this.getCookie(name);
    this.deleteCookie(name);
    return had;
  }
}
