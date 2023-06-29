import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
constructor(private userService:UserService,private router:Router){}
id!:number;
password!:String;
newPassword!:String;
user!:User;
toggle:boolean=false;
ngOnInit(): void {

}
goBack(){
  this.router.navigate(['Login'])
}
onSubmit(){
  console.log(this.password);
  console.log(this.id);
  //check password
if(this.password!==this.newPassword)
{
  this.toggle=true;

}
else{
  //change password
  this.userService.getUserById(this.id).subscribe(
    (data)=>{
      data.password=this.password;
  this.userService.register(data).subscribe(
    (data)=>{
      console.log(data);
    }
  )

    }
  )
  this.router.navigate(['Login']);
}
  
  
}
}
