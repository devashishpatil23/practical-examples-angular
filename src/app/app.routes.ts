import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostListnerComponent } from './pages/host-listner/host-listner.component';
import { DependentDropdownComponent } from './pages/dependent-dropdown/dependent-dropdown.component';
import { ServeSideFilterPaginationComponent } from './pages/serve-side-filter-pagination/serve-side-filter-pagination.component';
import { InlineEditingComponent } from './pages/inline-editing/inline-editing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { ToolTipComponent } from './pages/tool-tip/tool-tip.component';
import { CopyToClipboardComponent } from './pages/copy-to-clipboard/copy-to-clipboard.component';
import { BasicReactiveFormComponent } from './pages/basic-reactive-form/basic-reactive-form.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { UsernameAsyncValidatorComponent } from './pages/username-async-validator/username-async-validator.component';
import { SearchUsersComponent } from './pages/search-users/search-users.component';

import { MergeMapComponent } from './pages/rxjs/merge-map/merge-map.component';
import { ConcatMapComponent } from './pages/rxjs/concat-map/concat-map.component';
import { StepperFormComponent } from './pages/stepper-form/stepper-form.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { ResolveRouteGuardComponent } from './pages/resolve-route-guard/resolve-route-guard.component';
import { myResolverResolver } from './services/resolvers/my-resolver.resolver';
import { RoleBasedLoginComponent } from './pages/role-based-login/role-based-login.component';
import { MyApplicationsComponent } from './pages/role-based-login/my-applications/my-applications.component';
import { LoanApplicationsComponent } from './pages/role-based-login/loan-applications/loan-applications.component';
import { ChangePasswordComponent } from './pages/role-based-login/change-password/change-password.component';
import { ApprovalsComponent } from './pages/role-based-login/approvals/approvals.component';
import { CustomersComponent } from './pages/role-based-login/customers/customers.component';
import { ApprovedApplicationsComponent } from './pages/role-based-login/approved-applications/approved-applications.component';
import { LoginComponent } from './pages/role-based-login/login/login.component';
import { PipesPureImpureComponent } from './pages/pipes-pure-impure/pipes-pure-impure.component';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';

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
  {
    path: 'basic-reactive-form',
    component: BasicReactiveFormComponent,
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent,
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'unique-username',
    component: UsernameAsyncValidatorComponent,
  },
  {
    path: 'stepper-form',
    component: StepperFormComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
  {
    path: 'search-users-input',
    component: SearchUsersComponent,
  },
  {
    path: 'change-detection',
    component: ChangeDetectionComponent,
  },
  {
    path: 'merge-map',
    component: MergeMapComponent,
  },
  {
    path: 'concat-map',
    component: ConcatMapComponent,
  },
  {
    path: 'resolve-route',
    component: ResolveRouteGuardComponent,
    resolve: { data: myResolverResolver },
  },
  {
    path: 'pipes-pure-impure',
    component: PipesPureImpureComponent,
  },
  {
    path: 'custom-pipes',
    component: CustomPipesComponent,
  },
  {
    path: 'rolebasedlogin',
    component: RoleBasedLoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'my-applications',
        component: MyApplicationsComponent,
      },
      {
        path: 'approved-applications',
        component: ApprovedApplicationsComponent,
      },
      {
        path: 'loan-applications',
        component: LoanApplicationsComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'approvals',
        component: ApprovalsComponent,
      },
      {
        path: 'custmores',
        component: CustomersComponent,
      },
    ],
  },

  { path: '**', component: HomeComponent },
];
