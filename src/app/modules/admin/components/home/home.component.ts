import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/login/login.component';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService ,private router:Router,private userService:UserService){}
 id!:number;
 userList!:User[];
 searchText:string='';
  ngOnInit():void{
    
    // if(localStorage.getItem('token')==null)
    // {
      
    //   this.router.navigate(['Login']);
    // }
this.userService.getAll().subscribe(
  (data)=>{
    this.userList=data;
    console.log(this.userList)
  }
)
  }
  delete(id:number){
this.userService.deleteUser(id).subscribe(
  (data)=>
  {
    console.log("deleted")
  }
)
  }
}
