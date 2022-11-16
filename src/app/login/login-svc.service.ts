import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSvcService {

  constructor() { }


  setUserResponse(data:any){
    if(data){
    let userResp= JSON.stringify(data);
    userResp=window.btoa(userResp)
    localStorage.setItem('userResponse',userResp);
  }
}

  getUserResponse(){
    var data = localStorage.getItem('userResponse');
    if(data){
      data = window.atob(data);
      data  = JSON.parse(data);
      return data ;
    }
    return null ;
  }
  clearUserResponse(){
    localStorage.removeItem('userResponse')
  }
}
