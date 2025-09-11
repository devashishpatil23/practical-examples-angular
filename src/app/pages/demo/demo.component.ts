import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import passwordValidators from '../../shared/validators/password-validator.validator';
import passwordValidators111 from '../../shared/validators/passwordvalidator.validator';
import { ShowPasswordDirective } from '../../custom-directives/show-password/show-password.directive';

@Component({
  selector: 'app-demo',
  imports: [ReactiveFormsModule, ShowPasswordDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent implements OnInit {
  userForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  ngOnInit(): void {
    this.intiallIzeForm();
  }

  intiallIzeForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, passwordValidators111.passwordStrength],
      ],
      confirmpassword: [
        '',
        [Validators.required, passwordValidators111.confirmPassword],
      ],
    });
  }
  onSubmit() {
    console.log(this.userForm);
  }
}
