import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HardcodedAuthServiceService } from '../Services/hardcoded-auth-service.service';

export const routeGaurdGuard: CanActivateFn = (route, state) => {
  const hardCodedAuthService = inject(HardcodedAuthServiceService);
  const router = inject(Router);

  if (hardCodedAuthService.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
