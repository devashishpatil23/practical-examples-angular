import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostListnerComponent } from './pages/host-listner/host-listner.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hostlistner', component: HostListnerComponent },
  { path: '**', component: HomeComponent },
];
