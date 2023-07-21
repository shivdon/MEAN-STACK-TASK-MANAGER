import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient
  ) {}

  logout() {
    this.removeSession();

    this.router.navigate(['/signin']);
  }

  login(email: string, password: string) {
    return this.webService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body.user.id, res.body.session.jwt);
        console.log('LOGGED IN!');
      })
    );
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getUserId() {
    return localStorage.getItem('user-id');
  }

  signup(name: string, email: string, password: string) {
    return this.webService.signup(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body.user.id, res.body.session.jwt);
        console.log('Successfully signed up and now logged in!');
      })
    );
  }

  private setSession(userId: string, accessToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
  }
}
