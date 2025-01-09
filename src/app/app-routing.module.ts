import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FudbalComponent } from './fudbal/fudbal.component';
import { KosarkaComponent } from './kosarka/kosarka.component';
import { RukometComponent } from './rukomet/rukomet.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'fudbal', component: FudbalComponent },
  { path: 'kosarka', component: KosarkaComponent },
  { path: 'rukomet', component: RukometComponent },
  {path: '**', component: PageNotFoundComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
