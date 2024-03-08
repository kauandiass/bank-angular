import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.hasPermission('member').pipe(
      map(hasPermission => {
        if (hasPermission) {
          console.log("Permissão acessada");
          return true;
        } else {
          console.log("Permissão negada");
          this.router.navigate(['account/register']);
          return false;
        }
      })
    );
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class MemberGuard {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     let permission: boolean = false;
    
//     this.authService.hasPermission('member').subscribe(hasPermission => {
//       console.log(hasPermission)
//       permission = hasPermission;
//       console.log(permission)
      
//       if (permission === true) {
//         console.log("Permissão acessada");
//         // this.router.navigate(['home']);
//       } else {
//         console.log("Permissão negada");
//         this.router.navigate(['account/register']);
//       }
//     });
    
//     console.log(permission)
//     return permission;
//   }
// }

// export const AdminGuard = () => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   if(authService.hasPermission("admin"))
//   {
//     return true;
//   } else {
//     router.navigate(['account/register']);
//     return false;
//   }
// }

// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.isAuthenticated()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }