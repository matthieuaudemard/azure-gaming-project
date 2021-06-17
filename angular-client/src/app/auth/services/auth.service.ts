import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly ROOT_URL = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return false;
    }
    const payload = atob(token.split('.')[1]);
    const parsedPayload = JSON.parse(payload);

    return parsedPayload.exp > Date.now() / 1000;
  }

  login(username: string, password: string): Promise<void> {
    return new Promise(resolve => {
      this.http.post<any>(`${AuthService.ROOT_URL}/login`, {username, password}).subscribe(res => {
        if (res.access_token) {
          localStorage.setItem('access_token', res.access_token);
          return resolve();
        }
      })
    })
  }

  getUserToken(): string {
    return localStorage.getItem('access_token');
  }

  logout(): Promise<void> {
    return new Promise(resolve => {
      localStorage.removeItem('access_token');
      if (!localStorage.getItem('access_token')) {
        return resolve();
      }
    });
  }
}
