import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedin$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${environment.AUTH_API_URL}auth/username`,
      {
        username
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(
      `${environment.AUTH_API_URL}auth/signup`,
      credentials).pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(`${environment.AUTH_API_URL}auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedin$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${environment.AUTH_API_URL}auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }


  signin(credentials: SigninCredentials) {
    return this.http.post(`${environment.AUTH_API_URL}auth/signin`, credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }
}
