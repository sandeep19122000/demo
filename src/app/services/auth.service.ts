import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  setToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken():string | null{
return localStorage.getItem('token');
  }

  login(user:User): string{
    if(user.email=='admin@gmail.com')
    {
     
      return "admin@gmail.com";
    }
    else{
    return "user@gmail.com";}
  }

isLoggedin()
{
  return this.getToken()!==null;
}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
