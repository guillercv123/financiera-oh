import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';

import { routes } from './app.routes';
import {CommonModule} from '@angular/common';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient} from '@angular/common/http';
import {AuthGuard} from './common/services/auth-guard.service';
import {CookiesService} from './common/services/cookies.service';
import {AuthService} from './common/services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation()
    ),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(CommonModule),
    CookiesService,
    AuthService,
    AuthGuard,
  ]
};
