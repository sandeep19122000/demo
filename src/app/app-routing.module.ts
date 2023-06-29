import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { AccontDetailComponent } from './accont-detail/accont-detail.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {path: 'Login' , component: LoginComponent},
  { path: '',redirectTo:'/Login',pathMatch:'full'},
  {path: 'Forgot_password' , component: ForgotPasswordComponent},
  {path: 'User' , component: UserComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path: 'Account' , component: AccontDetailComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path: 'Transaction' , component: TransactionComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path: 'CreateAccount' , component: CreateAccountComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path: 'LoanStatus' , component: LoanStatusComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path: 'LoanRequest' , component: LoanRequestComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path: 'Forbidden' , component: ForbiddenComponent},
  {path: 'Register' , component: RegisterComponent},
  {path: 'Admin',
  canActivate:[AuthGuard], data:{roles:['Admin']} ,
loadChildren:()=>
  import('./modules/admin/admin.module').then((m) => m.AdminModule),
},
  {path: '**' , component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
