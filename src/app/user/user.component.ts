// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Account, User } from '../login/login.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
constructor(private router:Router,private userService:UserService){}
id!:number;
email!:String;
user!:User;

accountList!:Account[];
  ngOnInit():void{
    //error on provider
    this.id = Number(localStorage.getItem("id"));
    console.log(this.id);
   
    this.userService.getUserById(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        console.log(data.email)
        this.user=data;
       this.email=data.email;
       
       
       
      }
      
    )
    
//     this.userService.getAccountById(this.id).subscribe(
//     (data)=>{
// this.accountList=data;
// console.log(this.accountList);
//     }
//       )



}


logOut():void
{
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('roles');
  localStorage.removeItem('id');
  this.router.navigate(['Login']);
}
}
