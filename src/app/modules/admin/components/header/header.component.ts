import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private router :Router ,private auth:AuthService ,private userService: UserService){}
count! :number;
  ngOnInit(): void {
   this.userService.getAllLoan().subscribe(
    (data)=>{
      this.count = data.filter((item: any) => item.request=='pending').length;
      console.log(this.count)
    }
   )
  }

  logOut():void
  {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('roles');
    localStorage.removeItem('id');
    this.router.navigate(['Login']);
  }

}


