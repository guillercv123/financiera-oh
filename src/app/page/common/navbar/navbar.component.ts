import {Component, OnInit} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import {NgClass, NgIf} from '@angular/common';
import {CloseOnClickOutsideDirective} from '../../../common/directive/close-on-click-outside.directive';
import {CookiesService} from '../../../common/services/cookies.service';
import {AuthService} from '../../../common/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    CloseOnClickOutsideDirective,
    NgIf,
    NgClass,
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('150ms ease-in', style({ opacity: 1 }))]),
      transition(':leave', [animate('150ms ease-out', style({ opacity: 0 }))])
    ])
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  showWorkspaceMenu = false;
  showRecentMenu = false;
  showCrearMenu = false;
  email: string | null | undefined;
  isMobileMenuOpen = false;

  constructor(private cookies: CookiesService, private auth:AuthService) {
  }
  ngOnInit() {
      const token = this.cookies.getCookie('authToken');
      this.email = this.cookies.getUserFromToken(token);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(menu: 'workspace' | 'recent' | 'crear') {
    this.closeAll();
    if (menu === 'workspace') this.showWorkspaceMenu = !this.showWorkspaceMenu;
    if (menu === 'recent') this.showRecentMenu = !this.showRecentMenu;
    if (menu === 'crear') this.showCrearMenu = !this.showCrearMenu;

  }

  closeAll() {
    this.showWorkspaceMenu = false;
    this.showRecentMenu = false;
    this.showCrearMenu = false;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  signOut(){
    this.auth.logout();
  }
}
