import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ReactieFormComponent } from './reactie-form/reactie-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const ROUTES: Routes = [ 
  {path:'',redirectTo:'/product',pathMatch:'full'},
  {path:'product',component:HomeComponent},
  {path:'reactive',component:FormProductComponent},
  {path:'dirivenForm',component:ReactieFormComponent},
  {path:'**',component:PageNotFoundComponent},
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
