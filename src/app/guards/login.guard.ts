import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
 const router = inject(Router);

  if (authService.isLoggedIn()) {
    // Already logged in → redirect to home (or dashboard)
    router.navigate(['products']);
    return false;
  }
  return true; // not logged in → allow access
};
