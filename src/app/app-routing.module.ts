import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserMenuComponent } from './sign-up/user-menu/user-menu.component';

const routes: Routes = [
  {
    path : 'log-in' , 
    component : LogInComponent
  },
  {path : 'sign-up',
  component : SignUpComponent
  },
  {
    path : 'Home',
    component : HomeComponent
  },
  {
    path : 'user-menu',
    component : UserMenuComponent
  },
  
  {
    path : '',
    redirectTo : '/sign-up',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

