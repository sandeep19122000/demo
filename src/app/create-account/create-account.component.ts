import { Component, OnInit } from '@angular/core';
import { User, Bank, Branch, Account, Role } from '../login/login.component';
import { UserService } from '../service/user.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  constructor(private userService:UserService,private router:Router){}
accountNumber!:number;
id!:number;
branchCode!:number;
bankCode!:number;
account!:Account;
balance!:number;
user!:User;
bank!:Bank;
branch!:Branch;

  ngOnInit(): void {
    this.id = Number(localStorage.getItem("id"));
  }
  goBack(){
    this.router.navigate(['User'])
  }

onSubmit(){
  const role: Role[] = [];
  this.user=new User(this.id,"","",role);
  this.bank=new Bank(this.bankCode,"");
  this.branch=new Branch(this.branchCode,"","");
  this.account=new Account(
    this.accountNumber,
    0,
    this.user,
    this.bank,
    this.branch
  )
  this.userService.createAccount(this.account).subscribe(
    (data)=>{
      console.log(data);
    }
  )
  this.router.navigate(['User']);
}
}
