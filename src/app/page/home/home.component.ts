import {Component, OnInit} from '@angular/core';
import {CookiesService} from '../../common/services/cookies.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private cookieService: CookiesService) {
  }
  ngOnInit() {
    const token = this.cookieService.getCookie('authToken');
    if (token) {
      console.log('Token encontrado:', token);
    } else {
      console.log('Token no encontrado o expirado');
    }
  }
}
