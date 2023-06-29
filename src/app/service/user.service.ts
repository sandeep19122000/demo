import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account, JwtRequest, Loan, Role, User } from '../login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private router:Router ,private httpClient: HttpClient) { }
  url: string = 'http://localhost:8082/';


  // login(user: User) {
  //   return this.httpClient.post<User>(this.url +"user", user);
  // }

  register(user: User) {
    return this.httpClient.post(this.url+"createUser",user,
     {
      headers: this.requestHeader,
    }
    );
  }
  createLoan(loan: Loan) {
    return this.httpClient.post<any>(this.url+"createLoan", loan);
  }
  createAccount(account: Account) {
    return this.httpClient.post<any>(this.url+"createAccount", account);
  }
  getAll(){
    return this.httpClient.get<any>(this.url+"getAll");
  }
  // getById(id:number){
  //   return this.httpClient.get<User>(this.url+"user/"+id);
  // }
  // updateById(user: User, id: number){
  //   return this.httpClient.put<User>(this.url+"updateuser/"+ id, user);
  // }
  // deleteById(id: number){
  //   return this.httpClient.delete<User>(this.url+"Deleteuser/"+id);
  // }
  login(jwtRequest:JwtRequest){
    return this.httpClient.post<any>(this.url+"login", jwtRequest, {
      headers: this.requestHeader,
    });
  }
  getUserById(id:number){
    return this.httpClient.get<any>(this.url+"getUserById/"+id,
    {
      headers: this.requestHeader,
    }
  
    );
  }
  getUserByRoleName(name:String){
    return this.httpClient.get<any>(this.url+"getUserByRoleName/"+name)
  }
  getAccountById(id:number){
    return this.httpClient.get<any>(this.url+"getAccountById/"+id);
  }
  getAccountByAccountNumber(accountNumber:number){
    return this.httpClient.get<any>(this.url+"getAccountByAccountNumber/"+accountNumber);
  }

  getLoanByLoanNumber(loanNumber:number){
    return this.httpClient.get<any>(this.url+"getLoanByLoanNumber/"+loanNumber);
  }
getAllLoan(){
  return this.httpClient.get<any>(this.url+"getAllLoan");
}
deleteUser(id:number){
  return this.httpClient.delete(this.url+"deleteUser/"+id);
}
// updateLoanByLoanNumber(loanNumber:number){
//   return this.httpClient.put<Loan>(this.url+"getLoanByLoanNumber/"+loanNumber,Loan);
// }
// updateAccountByAccountNumber(accountNumber:number){
//   return this.httpClient.put<Loan>(this.url+"getAccountByAccountNumber/"+accountNumber,Loan);
// }

public roleMatch(allowedRoles: string | any[]): any {
  let isMatch = false;
  const userRoles: Role[] =JSON.parse(localStorage.getItem('roles') || '{}');



  if (userRoles != null && userRoles) {
    for (let i = 0; i < userRoles.length; i++) {
      for (let j = 0; j < allowedRoles.length; j++) {
        if (userRoles[i].roleName === allowedRoles[j]) {
          isMatch = true;
          return isMatch;
        } else {
          return isMatch;
        }
      }
    }
  }
}

}
