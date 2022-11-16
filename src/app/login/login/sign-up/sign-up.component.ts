import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/http/http.service';
import { passwordMismatch } from 'src/app/shared/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
signUpForm!:FormGroup;
@Output() signUpComplete :EventEmitter<boolean>=new EventEmitter
  constructor(private fb:FormBuilder, private http:HttpService) { }
  ngOnInit(): void {
    this.initilizeform();
  }
  initilizeform(){
    this.signUpForm=this.fb.group({
        'userName':['',[Validators.required]],
        'mobileNumber':['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        'password':['',[Validators.required]],
        'confirmPassword':['',[Validators.required]]
    },{validators:passwordMismatch})
  }
  signin(){
    
  }
  signUp(){
    const data = this.signUpForm.value
    this.http.postData('users',data).subscribe((resp)=>{
        console.log('resp',resp);
        this.signUpComplete.emit(true)
        
    },
    (error)=>{
      throw error;
    })
  }
  redirectToSignIn(){
  this.signUpComplete.emit(true)
  }
}
