import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface RegisterResponse {
  username: string
  password: string
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private endpoint = 'http://localhost:5265/register';

  constructor(private http: HttpClient) { }

  sendData(username: string, password: string, role: string = "Member"): Observable<RegisterResponse> {
    const data = {username, password, role};
    
    return this.http.post<RegisterResponse>(this.endpoint, data)
  }
}