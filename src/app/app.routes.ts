import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostListnerComponent } from './pages/host-listner/host-listner.component';
import { DependentDropdownComponent } from './pages/dependent-dropdown/dependent-dropdown.component';
import { ServeSideFilterPaginationComponent } from './pages/serve-side-filter-pagination/serve-side-filter-pagination.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hostlistner', component: HostListnerComponent },
  { path: 'dependent-dropdown', component: DependentDropdownComponent },
  {
    path: 'server-side-filter-pagination',
    component: ServeSideFilterPaginationComponent,
  },
  { path: '**', component: HomeComponent },
];
