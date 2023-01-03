import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AuthEffects } from '@appStore/auth/auth.effects';
import { environment } from '@env/environment';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appReducer } from './app/store/app.reducer';
import { CustomSerializer } from './app/store/router/custom-route-serializer';
import { appProviders } from './main-providers';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideStore(appReducer),
    provideEffects([AuthEffects]),
    provideRouterStore({
      serializer: CustomSerializer,
    }),
    provideStoreDevtools(),
    ...appProviders,
    importProvidersFrom(MatSnackBarModule),
  ],
}).catch((err) => console.error(err));
