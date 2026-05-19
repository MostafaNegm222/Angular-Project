import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const loginGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let toast = inject(ToastrService)
  let token = localStorage.getItem("token")
  if(!token) {
    return true;
  } else  {
    router.navigateByUrl('/home')
    toast.error("can't access this route")
    return false
  }
};
