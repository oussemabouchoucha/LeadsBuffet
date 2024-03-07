import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  onSubmit(form: NgForm, event: Event) {
    event.preventDefault();
    if (form.valid) {
      const { email } = form.value;
      this.auth.forgot(email).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
        }
      );
    }
  }
}
