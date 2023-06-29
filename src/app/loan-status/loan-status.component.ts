import { Component, OnInit } from '@angular/core';
import { Loan } from '../login/login.component';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})
export class LoanStatusComponent implements OnInit {
  constructor(private userService: UserService,private router:Router){}
  loanList!:Loan[];
  ngOnInit(): void {
this.userService.getAllLoan().subscribe(
  (data)=>{
    if(data==null)
    {
      alert("no request");
    }
    else{
    this.loanList=data;
  }
  }
)
  }
  goBack(){
    this.router.navigate(['User'])
  }


}
