import { Component, OnInit } from '@angular/core';
import { Account, Loan } from '../login/login.component';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {
  constructor(private userService:UserService ,private router:Router){}
  accountNumber!:number;
  id!:number;
  accountList!:Account[];
  currentAccountNumber!:number;
loanNumber!:number;
amount!:number;
status!:String;
request!:String;
account!:Account;
loan!:Loan;
  ngOnInit(): void {

  this.id = Number(localStorage.getItem('id'));
  this.userService.getAccountById(this.id).subscribe(
    (data)=>{
this.accountList=data;
console.log(this.accountList);
    }
      )
  }
  goBack(){
    this.router.navigate(['User'])
  }
onClick(accountNumber:number){
  console.log(accountNumber); 
  this.currentAccountNumber=accountNumber;
  console.log(this.currentAccountNumber);
  this.userService.getAccountByAccountNumber(this.currentAccountNumber).subscribe(
    (data)=>{
      this.account=data;
      console.log(data);
    }
  )
}

onSubmit(){
  if(this.account==null)
  {
    alert("add an account to get a loan")
    this.router.navigate(['/CreateAccount'])
  }
  else{
  this.loan=new Loan(
    this.amount,
    "pending",
  "pending",
    this.account,)
  console.log(this.amount);
  console.log(this.account);
  this.userService.createLoan(this.loan).subscribe(
    (data)=>{
      console.log(data)
    }
  )
alert("request submitted");
this.router.navigate(['User']);
}
}
}
