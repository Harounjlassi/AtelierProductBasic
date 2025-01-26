import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title!: string;
  listProduct!:Product[];
  // two binding
  priceMax!:number;

  constructor(){}
  ngOnInit(): void {
    this.title ='E-Commerce';
    this.listProduct=[
      {id:1,title:'T-Shirt 1',price:20,quantity: 5,like:0},
      {id:2,title:'T-Shirt 2',price:5,quantity: 0,like:0},
      {id:3,title:'T-Shirt 3',price:3,quantity: 12,like:0},
   
    ];
  }
  incrementLike(product:Product){
    //increment the liek of the products
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].like++;


  }
  pushProduct(product:Product){
    this.listProduct.push(product);
  }

}
