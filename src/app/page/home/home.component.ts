import {Component, OnInit} from '@angular/core';
import {CookiesService} from '../../common/services/cookies.service';
import {NavbarComponent} from '../common/navbar/navbar.component';
import {SidebarComponent} from '../common/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private cookieService: CookiesService) {
  }
  ngOnInit() {
    const token = this.cookieService.getCookie('authToken');
  }
}
