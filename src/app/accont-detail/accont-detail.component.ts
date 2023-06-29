import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Account } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accont-detail',
  templateUrl: './accont-detail.component.html',
  styleUrls: ['./accont-detail.component.css']
})
export class AccontDetailComponent implements OnInit {

  constructor(private userService:UserService,private router:Router){}
  id!: number;
  accountList!:Account[];
  currentAccountNumber!:number;
  account!:Account;
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

  
}
