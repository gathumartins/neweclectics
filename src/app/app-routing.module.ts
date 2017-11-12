import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BusinessComponent } from './business/business.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'solutions', component:SolutionsComponent },
  {path:'contacts', component:ContactsComponent },
  {path:'signin', component:LoginComponent },
  {path:'signup', component:SignupComponent },
  {path:'business', component:BusinessComponent },
  {path:'personal', component:PersonalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
