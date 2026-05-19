import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiLink = `https://zealous-contentment-production-5f84.up.railway.app/auth`
  constructor(private _http:HttpClient) {}

  login (user:any) {
    return this._http.post(`${this.apiLink}/login`,user)
  }

  getProfile () {
    const token = localStorage.getItem("token")?.split(" ")[1] || ""
    return this._http.get(`${this.apiLink}/get-profile`,{headers : {
      "authorization" : token
    }})
  }

  logout () {
    localStorage.removeItem("token")
  }

}
