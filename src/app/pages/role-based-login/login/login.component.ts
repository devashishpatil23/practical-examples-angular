import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});
  fb: FormBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http
        .post(
          `https://projectapi.gerasim.in/api/BankLoan/login`,
          this.loginForm.value
        )
        .subscribe({
          next: (res: any) => {
            if (res.result) {
              console.log(res);
              alert('Login Success');
              localStorage.setItem('user', JSON.stringify(res.data));
              if (res.data.role == 'Customer') {
                this.router.navigateByUrl('/rolebasedlogin/my-applications');
              } else {
                this.router.navigate(['/rolebasedlogin/loan-applications']);
              }
            } else {
              console.log(res);
              alert('User not fount');
            }
          },
          error: (err: any) => {
            console.log(err.message);
          },
        });
    } else {
      console.log('Form Invalid');
    }
  }


}
