import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http/http.service';
import { product } from '../models/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:product[] = [] ;
  filterproductList:product[] = [] ;
  // categorySection = {
  //   'men''
  // }
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(){
    this.http.getData("productsitems").subscribe((resp:any)=>{
     this.productList  = resp ;
     this.filterProducts('all');
     console.log("product-list",this.productList);
    },
    (error)=>{
      console.log(error);
    })
  }

  filterProducts(category:string){
    if(category != 'all'){
      this.filterproductList = this.productList.filter((el=> (el.category == category )));

      // this.filterProductsList = this.productList.filter((el=> (el.title.includes(category))));

    }else {
      this.filterproductList =  this.productList ;
    }
  }


}