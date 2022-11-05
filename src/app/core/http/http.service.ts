import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl:string=environment.baseUrl



  constructor(private http:HttpClient) { }


headers= new HttpHeaders()
            .set("content-type","application/json")



getData(endPoint:string){


 return this.http.get(this.baseUrl+endPoint,{'headers':this.headers})
  }
}
