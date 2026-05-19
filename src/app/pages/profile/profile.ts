import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  constructor(private _authService:Auth , private router:Router , private toast:ToastrService) {}
  ngOnInit(): void {
    this._authService.getProfile().subscribe({
      next : (res:any) => console.log(res)

    })
  }
}
