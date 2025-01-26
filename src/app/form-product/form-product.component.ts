import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
product!:Product;
@Output() eventSaveProduct= new EventEmitter<Product>();

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.product= new Product();
  
}
save(){
  this.product.like=0;
  this.eventSaveProduct.emit(this.product);

}
}
