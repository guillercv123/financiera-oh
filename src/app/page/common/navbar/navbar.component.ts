import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {NgIf} from '@angular/common';
import {CloseOnClickOutsideDirective} from '../../../common/directive/close-on-click-outside.directive';

@Component({
  selector: 'app-navbar',
  imports: [
    CloseOnClickOutsideDirective,
    NgIf
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
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
