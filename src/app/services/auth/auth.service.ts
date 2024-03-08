import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Console, error } from 'console';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) {}
  
  login(credentials: { username: string, password: string }) {
    return this.http.post<any>('http://localhost:5265/login', credentials);
  }

  hasPermission(role: string): Observable<boolean> {
    if (typeof localStorage === 'undefined') {
      console.log("LocalStorage: Vazio")
      return of(false); // Não estamos no contexto do navegador
    }

    const token = localStorage.getItem('token');
    if (!token) {
      console.log("LocalStorage: Token não está presente")
      return of(false); // Trate o caso em que o token não está presente
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`http://localhost:5265/${role}`, { headers }).pipe(
      map(response => {
        console.log(response);
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log("Erroooooooooooooooor")
        console.error('Erro na requisição:', error);
        return of(false); // Retorna false caso ocorra um erro HTTP
      })
    );
  }


  // hasPermission(role: string): Observable<boolean> {
  //   if (typeof localStorage === 'undefined') {
  //     return new Observable<boolean>(observer => {
  //       observer.next(false); // Não estamos no contexto do navegador
  //       observer.complete();
  //     });
  //   }

  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     return new Observable<boolean>(observer => {
  //       observer.next(false); // Trate o caso em que o token não está presente
  //       observer.complete();
  //     });
  //   }

  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   // return this.http.get<any>(`http://localhost:5265/${role}`, { headers }).pipe(
  //   //   map(response => {
  //   //     console.log(response);
  //   //     if (response == true) {
  //   //       console.log("Token verdadeiro");
  //   //       return true;
  //   //     } else {
  //   //       console.log("Token falso");
  //   //       return false;
  //   //     }
  //   //   })
  //   // );
  //   return this.http.get<any>(`http://localhost:5265/${role}`, { headers }).pipe(
  //     map(response => {
  //       console.log(response);
  //       return response === true;
  //     }),
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Erro na requisição:', error);
  //       return of(false); // Retorna false caso ocorra um erro HTTP
  //     })
  //   );
  // }

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

  // hasPermission(role: string): string {
  //   if (typeof localStorage === 'undefined') {
  //     return "Olaaaaaa"; // Não estamos no contexto do navegador
  //   }
  
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     return "false"; // Trate o caso em que o token não está presente
  //   }
  
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  
  //   this.http.get<any>(`http://localhost:5265/${role}`, { headers }).subscribe({
  //     next: (response) => {
  //       console.log(response)
        
  //       if (response == true) {
  //         console.log("Token verdadeiro")
  //         return "Token verdadeiro";
  //       } else {
  //         console.log("Token falso")
  //         return "Token falso";
  //       }
  //     }
  //   });
    
  //   return "Oiiiiiiii";
  // }

  // hasPermission(role: string): Observable<boolean> {
  //   if (typeof localStorage === 'undefined') {
      
  //     return new Observable<boolean>(observer => {
  //       observer.next(false); // Não estamos no contexto do navegador
  //       observer.complete();
  //     });
  //   }

  //   const token = localStorage.getItem('token');
  //   if (!token) {
      
  //     return new Observable<boolean>(observer => {
  //       observer.next(false); // Trate o caso em que o token não está presente
  //       observer.complete();
  //     });
  //   }

  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.get<any>(`http://localhost:5265/${role}`, { headers }).pipe(
  //     map(response => {
        
  //       console.log(response);
  //       if (response == true) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //   );
  // }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
