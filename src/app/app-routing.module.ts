import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './view/main/signup/signup.component';
import { DashboardComponent } from './view/main/dashboard/dashboard.component';
import { SacComponent } from './view/main/sac/sac.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SignupComponent },
  { path: 'Home', component: DashboardComponent },
  { path: 'sac', component: SacComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
