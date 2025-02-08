import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct: Product[] = [];
  constructor() { }
  getProducts(){
    //share data
    return  this.listProduct=[
      {id:1,title:'T-Shirt 1',price:20,quantity: 5,like:0},
      {id:2,title:'T-Shirt 2',price:5,quantity: 0,like:0},
      {id:3,title:'T-Shirt 3',price:3,quantity: 12,like:0},
      
    ];
    
  }
 
  getProductById(id:number){
    return this.listProduct.find(p=>p.id==id);
  }
}
