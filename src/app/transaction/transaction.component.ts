import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Account } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private userService:UserService,private router:Router){}
  account!:Account;
  account2!:Account;
  accountNumber!:number;
  currentAccountNumber!:number;
  id!:number;
  accountList!:Account[];
  amount!:number;


   ngOnInit(): void {

  this.id = Number(localStorage.getItem('id'));
  this.userService.getAccountById(this.id).subscribe(
    (data)=>{
this.accountList=data;
console.log(this.accountList);
    }
      )
  }
  onClick(accountNumber:number){
    console.log(accountNumber); 
    this.currentAccountNumber=accountNumber;
    this.userService.getAccountByAccountNumber(this.currentAccountNumber).subscribe(
      (data)=>{
        this.account=data;
        console.log(this.account);
      }
    )
  }

  goBack(){
    this.router.navigate(['User'])
  }
  onSubmit(){
     //recepient account
    this.userService.getAccountByAccountNumber(this.accountNumber).subscribe(
      (data)=>{
        if(data==null || this.account==null){
          alert("no such account")
        }
        else{
        console.log(data);
        this.account2=data;
      data.balance=data.balance+this.amount;
      this.userService.createAccount(data).subscribe(
        (data)=>{
          console.log(data);
        }
      )
        }
      }
    )

    //senders account
     if(this.account2!==null){
    this.account.balance=this.account.balance-this.amount;
    this.userService.createAccount(this.account).subscribe(
      (data)=>{
console.log(data);
      }
    )
     }
  }
}
