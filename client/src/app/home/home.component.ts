import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private cookieService: CookieService, private router: Router) {}
  ngOnInit() {
    const jwtToken = this.cookieService.get('access_token');
    if (!jwtToken) {
      this.router.navigate(['/login']);
    }
  }
}
