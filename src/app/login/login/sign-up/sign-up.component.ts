import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMismatch } from 'src/app/shared/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
signUpForm!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initilizeform();
  }
  initilizeform(){
    this.signUpForm=this.fb.group({
        'userName':['',[Validators.required]],
        'mobilenumber':['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        'Password':['',[Validators.required]],
        'ConfirmPassword':['',[Validators.required]]
    },{Validators:passwordMismatch})
  }
  signin(){
    
  }
  signUp(){

  }
  redirectTosignIn(){
    
  }
}
