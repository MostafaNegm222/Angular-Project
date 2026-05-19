import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  login!:FormGroup
  constructor(private _authService:Auth , private router:Router , private fb:FormBuilder , private toast:ToastrService) {}
  ngOnInit(): void {
   this.login = this.fb.group({
    email : ['' , [Validators.required , Validators.email]],
    password : ['' , [Validators.required , Validators.minLength(6)]],
   })
  }
  checkInput (input:string) {
    return this.login.get(input)?.errors && (this.login.get(input)?.touched || this.login.get(input)?.dirty)
  }

  submit() {
    this._authService.login(this.login.value).subscribe({
      next : (res:any) => {
        localStorage.setItem("token",res.token)
        this.router.navigateByUrl("/home")
      },
      error : (err) => {
        console.log(err);
        this.toast.error(err.error.message,"Can't login this user")
      }
    })
  }
}
