import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const adminGuard: CanActivateFn = (route, state) => {
  const http = inject(HttpClient)
  const router = inject(Router)
  const token = localStorage.getItem('token')?.split(" ")[1] || ""
  const payload:any = jwtDecode(token)
  let role
  try {
    const user = http.get(`http://localhost:5000/users/${payload.id}`,{headers:{
    "authorization" : token
  }}).subscribe({
    next: (res:any) => {
      role = res.data.role
      if (role == "admin")  {
        
        return true
      }

      else  {
        router.navigateByUrl("/home")
        return false
      }
    } ,
    error : (err) => {
      console.log(err)
      return false
    }
  })
  return true
  } catch (error) {
    console.log(error);
    return false
  }
};
