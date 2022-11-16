import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent,
    SignUpComponent,
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
   
  ],
  exports:[
    SigninComponent,
    SignUpComponent
  ]
})
export class LoginModule { }
