import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  onSubmit(form: NgForm, event: Event) {
    event.preventDefault();
    if (form.valid) {
      const { email, password } = form.value;
      this.auth.login(email, password).subscribe(
        (response: any) => {
          if (response['access_token']) {
            // Store token in cookie
            this.cookieService.set('access_token', response.access_token);
            // Redirect to home page
            this.router.navigate(['/']);
          } else {
            alert('Login failed');
            event.preventDefault();
          }
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
        }
      );
    }
  }
}
