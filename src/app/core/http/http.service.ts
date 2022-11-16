import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl:string=environment.baseUrl



  constructor(private http:HttpClient,) { }


headers= new HttpHeaders()
            .set("content-type","application/json")



getData(endPoint:string,params:HttpParams = new HttpParams()){
 return this.http.get(this.baseUrl+endPoint,{'params':params,'headers':this.headers})
  }


  postData(endPoint:string,requestBody:any){
    return this.http.post(this.baseUrl+endPoint,requestBody,{'headers':this.headers})
  }
}
