import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoansDetailComponent } from './components/loans-detail/loans-detail.component';

const routes: Routes = [
  {path:'', component: AdminDashboardComponent,
  children: [
    { path:'User_detail', component: UserDetailsComponent},
    { path:'Home', component: HomeComponent},
    { path:'Loan', component: LoansDetailComponent},
    { path:'About', component: AboutComponent},
    {path:'' ,redirectTo: '/Admin/Home' ,pathMatch:'full'},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
