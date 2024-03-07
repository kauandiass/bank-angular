import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Console, error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) {}
  
  login(credentials: { username: string, password: string }) {
    return this.http.post<any>('http://localhost:5265/login', credentials);
  }

  // hasPermission() {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     return false; // Trate o caso em que o token não está presente
  //   }

  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   this.http.get<any>("http://localhost:5265/member", { headers }).subscribe({
  //     next: (response) => {
  //       console.log(response)
  //       console.log(response)
  //       console.log(response)
  //       console.log(response)
  //       return response;
  //     }
  //   });
  //   return true;
  // }

  hasPermission(role: string) {
    if (typeof localStorage === 'undefined') {
      return false; // Não estamos no contexto do navegador
    }
  
    const token = localStorage.getItem('token');
    if (!token) {
      return false; // Trate o caso em que o token não está presente
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    this.http.get<any>(`http://localhost:5265/${role}`, { headers }).subscribe({
      next: (response) => {
        console.log(response)
        return response;
      }
    });
    return true;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
