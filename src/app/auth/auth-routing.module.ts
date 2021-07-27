import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignoutComponent } from './signout/signout.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: 'signout', component: SignoutComponent },
  { path: 'signup', component: SingupComponent },
  { path: '', component: SinginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
