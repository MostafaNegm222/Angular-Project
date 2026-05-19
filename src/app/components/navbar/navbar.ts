import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private _authService:Auth , private router:Router) {

  }
  token = localStorage.getItem("token")

  Logout() {
    this._authService.logout()
    this.router.navigateByUrl('/auth/login')
  }
}
