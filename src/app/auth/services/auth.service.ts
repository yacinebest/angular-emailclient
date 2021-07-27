import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface UsernameAvailableResponse {
  available: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${environment.AUTH_API_URL}auth/username`,
      {
        username
      }
    );
  }
}
