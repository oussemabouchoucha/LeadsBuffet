import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent implements OnInit {
  token: string | undefined;
  id: string | undefined;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the token from the route parameters
    this.route.params.subscribe((params) => {
      this.token = params['token'];
      this.id = params['id'];

      // Check the token validity
      this.authService.checkResetPasswordToken(this.id, this.token).subscribe(
        (isValid) => {
          if (isValid) {
            // Token is valid, you can proceed with resetting the password
            console.log('Token is valid');
          } else {
            // Token is not valid, handle accordingly (e.g., redirect to an error page)
            console.log('Token is not valid');
          }
        },
        (error) => {
          // Handle API request error
          console.error('Error checking token validity', error);
        }
      );
    });
  }
}
