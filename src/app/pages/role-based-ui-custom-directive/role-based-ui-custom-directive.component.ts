import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HasRoleDirective } from '../../custom-directives/has-role.directive';

@Component({
  selector: 'app-role-based-ui-custom-directive',
  imports: [CommonModule, HasRoleDirective],
  templateUrl: './role-based-ui-custom-directive.component.html',
  styleUrl: './role-based-ui-custom-directive.component.scss',
})
export class RoleBasedUiCustomDirectiveComponent {
  roles: string[] = ['guest'];

  onRoleChange(role: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      if (!this.roles.includes(role)) {
        this.roles.push(role);
        localStorage.setItem('roles', JSON.stringify(this.roles));
      }
    } else {
      this.roles = this.roles.filter((r) => r !== role);
      localStorage.setItem('roles', JSON.stringify(this.roles));
    }
  }
}
