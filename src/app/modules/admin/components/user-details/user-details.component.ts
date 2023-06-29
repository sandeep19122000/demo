import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/login/login.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
constructor(private router:Router,private userService:UserService){}
userList!:User[];

ngOnInit():void{
  // if(localStorage.getItem('token')==null)
  // {
    
  //   this.router.navigate(['Login']);
  // }
//  this.id=Number(localStorage.getItem('id'));
this.userService.getUserByRoleName("User").subscribe(
  (data)=>{
  this.userList=data;
  console.log(this.userList)

  }
 )

}


  onDelete(id:number){
   
  }
}
