import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginResponse {
  token: any;
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint = 'http://localhost:5265/login';

  constructor(private http: HttpClient) { }

  sendData(username: string, password: string): Observable<LoginResponse> {
    const data = {username, password};
    
    return this.http.post<LoginResponse>(this.endpoint, data)
  }
}
