import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostListnerComponent } from './pages/host-listner/host-listner.component';
import { DependentDropdownComponent } from './pages/dependent-dropdown/dependent-dropdown.component';
import { ServeSideFilterPaginationComponent } from './pages/serve-side-filter-pagination/serve-side-filter-pagination.component';
import { InlineEditingComponent } from './pages/inline-editing/inline-editing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ToolTipComponent } from './pages/tool-tip/tool-tip.component';
import { CopyToClipboardComponent } from './pages/copy-to-clipboard/copy-to-clipboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hostlistner', component: HostListnerComponent },
  { path: 'dependent-dropdown', component: DependentDropdownComponent },
  {
    path: 'server-side-filter-pagination',
    component: ServeSideFilterPaginationComponent,
  },
  {
    path: 'inline-form-editing',
    component: InlineEditingComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'tool-tip',
    component: ToolTipComponent,
  },
  {
    path: 'copy-to-clipboard',
    component: CopyToClipboardComponent,
  },
  { path: '**', component: HomeComponent },
];
