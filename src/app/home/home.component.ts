import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service'; // Import the correct service//+
import { CalculService } from '../services/calcul.service';

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
  hideForm!:boolean;
  statNumbers!:number;
  constructor( private servcieproduct:ProductService,private Cal:CalculService){}
  ngOnInit(): void {
    this.hideForm=true;
    this.title ='E-Commerce';
    this.listProduct= this.servcieproduct.getProducts();
  }
  incrementLike(product:Product){
    //increment the liek of the products
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].like++;


  }
  pushProduct(product:Product){
    this.listProduct.push(product);
  }
  showForm(){
    this.hideForm=!this.hideForm;
  }
  stat(){

    this.statNumbers = this.Cal.getStat(this.listProduct,"quantity",0);
    console.log(this.statNumbers);
  }




}
