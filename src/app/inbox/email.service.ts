import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

export interface Email {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //abc123456789
  //123456789

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${environment.API_URL}emails`);
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${environment.API_URL}emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post(`${environment.API_URL}emails`, email);
  }
}
