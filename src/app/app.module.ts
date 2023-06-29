import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { AccontDetailComponent } from './accont-detail/accont-detail.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { UserService } from './service/user.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    UserComponent,
    RegisterComponent,
    LoanRequestComponent,
    LoanStatusComponent,
    AccontDetailComponent,
    TransactionComponent,
    CreateAccountComponent,
    HeaderComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
