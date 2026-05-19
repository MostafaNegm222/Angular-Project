import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let toast = inject(ToastrService)
  let token = localStorage.getItem("token")
  if(token) {
    return true;
  } else  {
    router.navigateByUrl('/auth/login')
    toast.error("can't access this route")
    return false
  }
};
