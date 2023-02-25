import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post('http://0.0.0.0:3000/users/signin', { email, password })
      .pipe(
        tap((res) => this.setSession(res as string)),
        shareReplay()
      );
    // this is just the HTTP call,
    // we still need to handle the reception of the token
  }

  private setSession(token: string) {
    localStorage.setItem('id_token', token);
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}
