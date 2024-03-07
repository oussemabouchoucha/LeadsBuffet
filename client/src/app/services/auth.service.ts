import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/auth';
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  register(
    username: string,
    email: string,
    password: string,
    role: string = 'user'
  ) {
    const body = { username, email, password, role };
    return this.http.post(`${this.apiUrl}/register`, body);
  }

  forgot(email: string) {
    return this.http.post(`${this.apiUrl}/forgot-password`, {
      email,
    });
  }

  checkResetPasswordToken(id: string | undefined, token: string | undefined) {
    const body = { id, token };
    return this.http.post(`${this.apiUrl}/verify-reset`, body as any);
  }
}
