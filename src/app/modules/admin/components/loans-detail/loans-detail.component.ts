import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/login/login.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-loans-detail',
  templateUrl: './loans-detail.component.html',
  styleUrls: ['./loans-detail.component.css']
})
export class LoansDetailComponent implements OnInit  {
  constructor(private userService:UserService,private router:Router){}
loanList!:Loan[];
loan!:Loan;
accountNumber!:number;
show!:boolean;

ngOnInit(): void {
  this.userService.getAllLoan().subscribe(
    (data)=>{
      this.loanList=data;
      console.log(this.loanList);
    }
  )

}

method(request:String){
if(request=="")
this.show=true;
}

accept(loanNumber:number,accountNumber:number,amount:number)
{
  
  console.log(loanNumber);
this.userService.getLoanByLoanNumber(loanNumber).subscribe(
  (data)=>{
   
data.request="accepted";
data.status="approved";
this.userService.createLoan(data).subscribe(
  (data)=>{
    console.log(data);
  }
)
  }
)
this.accountNumber=accountNumber;
this.userService.getAccountByAccountNumber(accountNumber).subscribe(
  (data)=>{
    console.log(data.balance);
    data.balance=data.balance+amount;
    
    this.userService.createAccount(data).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }
)

  


}
reject(loanNumber:number,accountNumber:number,amount:number){
  
  this.userService.getLoanByLoanNumber(loanNumber).subscribe(
    (data)=>{
     
  data.request="rejected";
  data.status="rejected";
  // update Loan
  this.userService.createLoan(data).subscribe(
    (data)=>{
      console.log(data);
    }
  )
  // upadte account
// this.userService.getAccountByAccountNumber(accountNumber).subscribe(
//   (data)=>{
//     data.balance=data.balance-amount;
//     this.userService.createAccount(data).subscribe(
//       (data)=>{
//         console.log(data);
//       }
//     )
//   }
// )

    }
  )
}

}
