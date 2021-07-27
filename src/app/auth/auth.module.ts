import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { SharedModule } from '../shared/shared.module';
import { SignoutComponent } from './signout/signout.component';


@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
