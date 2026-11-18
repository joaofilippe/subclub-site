import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    providers: [importProvidersFrom(MatDialogModule, MatSnackBarModule)],
    component: LandingPageComponent,
  },
];
