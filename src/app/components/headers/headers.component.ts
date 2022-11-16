import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginSvcService } from 'src/app/login/login-svc.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  actionType:string="signIn";

 
  isUserLoggedIn:boolean=false;
  userDetails:any;
  @ViewChild('btnClosed')btnClosed!:ElementRef;


  constructor(private loginSvc:LoginSvcService  ) { }

  ngOnInit(): void {
    this.validateUser()
  }
  emitActionSign(action:any){
    if(action=='login-success'){
   this.loginsuccess()


    }else{
      this.actionType=action;
    }




  }
  signUpAction(flag:boolean){
    if (flag){
      this.actionType ='signIn'
    }
  

  }
  loginsuccess(){
    
    this.isUserLoggedIn= true;
    const resp=this.loginSvc.getUserResponse();
    if(resp!= null){
      this.userDetails =resp;
    }
    this.btnClosed.nativeElement.click();
  }
  validateUser(){
    const resp=this.loginSvc.getUserResponse();
    if(resp!= null){
      this.userDetails =resp;
      this.isUserLoggedIn= true;
    }
   
  }
  Logout(){
    this.loginSvc.clearUserResponse();
   this.isUserLoggedIn=false;
  }
}
