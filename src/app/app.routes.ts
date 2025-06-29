import { Routes } from '@angular/router';
import { Home } from './components/main/home/home';
import { Login } from './components/main/login/login';
import { Register } from './components/main/register/register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users/login', component: Login },
  { path: 'users/register', component: Register },
];
