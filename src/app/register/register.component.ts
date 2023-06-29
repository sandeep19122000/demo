import { Component } from '@angular/core';
import { Role, User } from '../login/login.component';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService ,private router :Router){}
id!:number;
email!:String;
password!:String;
role!:Role[];
topic =['user','admin'];
subscription!:any;
 
user: User
={id:this.id,email:this.email,password:this.password ,role:this.role}
;
onSubmit()
{
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
this.subscription=this.userService.register(this.user).subscribe(
  (data)=>{console.log(data);
    if(data==null)
    {
      alert("email already exist's");
    }
  else{
alert("Registered Successfully")
this.router.navigate(['Login']);
  }
  },
  // (error) => {
  //   console.log(error);
  // }
  )
}
}
