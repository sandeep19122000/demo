import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private auth: AuthService,private userService:UserService){}

  ngOnInit(): void {
     if(localStorage.getItem('jwtToken'))
     {
       if(JSON.parse(localStorage.getItem('roles') || '{}')[0].roleName=="Admin")
       {
        this.router.navigate(['Admin'])
       }
       if(JSON.parse(localStorage.getItem('roles') || '{}')[0].roleName=="User")
       {
        this.router.navigate(['User'])
       }
     }
    // const userRoles: Role[] =JSON.parse(localStorage.getItem('roles') || '{}');
    

 

      // if(JSON.parse(localStorage.getItem('roles') || '{}')[0].roleName=="Admin")
      //  {
      //   this.router.navigate(['Admin'])
      //  }
      //  if(JSON.parse(localStorage.getItem('roles') || '{}')[0].roleName=="User")
      //  {
      //   this.router.navigate(['User'])
      //  }
    

  }
email!: String;
password!: String;
data!: String;
role!: String;
jwtRequest: JwtRequest={email:this.email,password:this.password};

onSubmit(): void
{
   console.log(this.jwtRequest);
   this.userService.login(this.jwtRequest).subscribe(
    (data:any)=>{
    //   if(data==null)
    //   {
    //     alert("Incorrect email or password")
    //   }
    //   if(data.role=="admin")
    //   {
    //     localStorage.setItem('token','ctrhrhrehre');
    //   this.router.navigate(['Admin']);
    //   alert("Login Successfull as admin")
    //   }
    //   else {
    //     localStorage.setItem('token2','abc');
    //   this.router.navigate(['User']);
    //   alert("Login Successfull as user")
    //   }
    // localStorage.setItem('id',data.id);
    // (err:Error)=>{
    //   alert(err.message);
    // }

    console.log(data.user.id);
    localStorage.setItem('roles', JSON.stringify(data.user.role));
    localStorage.setItem('id', JSON.stringify(data.user.id));
    localStorage.setItem('jwtToken', data.jwtToken);
    const role = data.user.role[0].roleName;
    if (role === 'Admin') {
      this.router.navigate(['/Admin']);
    } else {
      this.router.navigate(['/User']);
    }
  },
  
);
}

  
  
onClick()
{
   
  console.log(this.jwtRequest);
}

// setemail(event){
//   console.log(event.toElement.value);

// }
// setpass(password: String)
// {
// this.password=password;
// }
}
export class User{
  id!: number;
  email!: String;
  password!: String;
  role: Role[];

  constructor( 
    id: number,
    email: String,
    password: String,role: Role[])
    {
      this.id=id; 
      this.email=email;
      this.password=password; 
      this.role=role;
    }

   


}

export class Account{
      accountNumber!:number;
      balance!:number;
      user!:User;
      bank!:Bank;
      branch!:Branch;
      constructor(accountNumber:number,
        balance:number,  user:User,
        bank:Bank,
        branch:Branch){
          this.accountNumber=accountNumber;
          this.balance=balance;
          this.user=user;
          this.bank=bank;
          this.branch=branch;

      }

}
export class Bank{
  bankCode!:number;
  bankName!:String;
  constructor( bankCode:number,
    bankName:String){
      this.bankCode=bankCode;
      this.bankName=bankName;

  }
}

export class Branch{
  branchCode!:number;
  branchName!:String;
  branchAddress!:String;
  constructor(  branchCode:number,
    branchName:String,
    branchAddress:String){
this.branchAddress=branchAddress;
this.branchCode=branchCode;
this.branchName=branchName;
  }
}

export class Loan{
  loanNumber!:number;
  amount!:number;
  status!:String;
  request!:String;
  account!:Account;
  constructor(
    amount:number,
    status:String,
    request:String,
    account:Account,){

      this.amount=amount;
      this.status=status;
      this.request=request;
      this.account=account;
    }
}

export class JwtRequest{
  email!:String;
  password!:String;
  constructor(  email:String,
    password:String){
     this.email=email;
     this.password=password;
    }
}

export class JwtResponse{
  user!:User;
  jwtToken!:String;
  constructor(user:User,
    jwtToken:String){
    this.user=user;
    this.jwtToken=jwtToken;
  }
}
export class Role{
  roleName!:String;
  roleDiscription!:String;
  constructor(roleName:String,
    roleDiscription:String){
this.roleName=roleName;
this.roleDiscription=roleDiscription;
  }
}