// import { outputAst } from '@angular/compiler';
import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';
import { HttpService } from 'src/app/core/http/http.service';
import { LoginSvcService } from '../../login-svc.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

signInForm !:FormGroup


@Output() actionEmit:EventEmitter<string> =new EventEmitter();



  constructor( private fb:FormBuilder,private http:HttpService, private Loginsvc:LoginSvcService) { }

  ngOnInit(): void {
    this.signInForm =this.fb.group({
      'mobileNumber':['', [Validators.required]],
      'password':['', [Validators.required]]
    })
  }


  signIn() {
    const params = new HttpParams()
                   .set('mobileNumber',this.signInForm.value.mobileNumber)
                   .set('password',this.signInForm.value.password);

    this.http.getData('users',params).subscribe((resp)=>{
      if(Array.isArray(resp) && resp.length > 0){
       let response = resp[0];
       response['Token'] = "abcgjjjhgjh124e54vvbn";
      //  localStorage.setItem('Token' , response['Token']);
       this.Loginsvc.setUserResponse(response);
       this.emitActionSign('login-success')
      }
    },
    (error)=>{
       
    })
  }

  emitActionSign(action:string){
    this.actionEmit.emit(action)
  }





  
 
}
