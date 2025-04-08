import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NewComponent } from './components/messages/new/new.component';

export const routes: Routes = [
  {
    path: 'log-in',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'new-message',
    component: NewComponent
  }
];
