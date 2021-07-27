import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
