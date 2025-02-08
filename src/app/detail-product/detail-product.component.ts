import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
   products:Product[]=[];
  product!:Product;

  constructor(private serviceroute:ActivatedRoute,private seviceproduct:ProductService) {


   }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.serviceroute.snapshot.params['id']);
    this.products = this.seviceproduct.getProducts();

  }

}
