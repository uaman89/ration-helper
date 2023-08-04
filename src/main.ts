import { enableProdMode } from '@angular/core';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routes';
import { STORAGE_SERVICE } from './app/core/constants/config';
import { LocalStorageService } from './app/core/services/LocalStorageService';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    { provide: STORAGE_SERVICE, useClass: LocalStorageService },
  ],
}).catch((err) => console.error(err));
