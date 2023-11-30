import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://tu_api/auth'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  register(data: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, data);
  }
}
