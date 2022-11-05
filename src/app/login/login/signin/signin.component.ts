import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

signInForm !:FormGroup


@Output() actionEmit:EventEmitter<string> =new EventEmitter();



  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signInForm =this.fb.group({
      'userName':['', [Validators.required]],
      'Password':['', [Validators.required]]
    })
  }
  signIn(){
console.log(this.signInForm.value)
  }
  redirectTosignup(){
    this.actionEmit.emit("signup")
  }
  emitActionSign(){
    
  }
}
