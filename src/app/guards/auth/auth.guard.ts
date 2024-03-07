import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

Injectable({
  providedIn: 'root'
})
export const MemberGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.hasPermission("member"))
  {
    return true;
  } else {
    router.navigate(['account/register']);
    return false;
  }
}

export const AdminGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.hasPermission("admin"))
  {
    return true;
  } else {
    router.navigate(['account/register']);
    return false;
  }
}

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