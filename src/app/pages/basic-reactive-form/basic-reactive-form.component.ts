import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShowPasswordDirective } from '../../custom-directives/show-password/show-password.directive';
import passwordValidators from '../../shared/validators/password-validator.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-reactive-form',
  imports: [ReactiveFormsModule, ShowPasswordDirective],
  templateUrl: './basic-reactive-form.component.html',
  styleUrl: './basic-reactive-form.component.scss',
})
export class BasicReactiveFormComponent {
  myForm!: FormGroup;
  router = inject(Router);

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        passwordValidators.passwordStrength,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        passwordValidators.matchPassword,
      ]),
    });
  }

  onSubmit() {
    this.myForm.reset();
    alert('Formed Saved!');
    this.router.navigate(['/']);
  }
}
