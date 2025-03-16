import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactie-form',
  templateUrl: './reactie-form.component.html',
  styleUrls: ['./reactie-form.component.css']
})
export class ReactieFormComponent implements OnInit{

  // name=new FormControl('haroun',Validators.required);
  registerForm!: FormGroup;
  constructor(){}

  @Injectable({
    providedIn: 'root'
  })
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm=new FormGroup({firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl('',[Validators.required,Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    adress: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
    }),
    });  

  }
  onSubmit(){
    console.log(this.registerForm.value);
        //display form values on succces 
        alert('SUCCESS\n\n'+ JSON.stringify(this.registerForm.value,null,4));
  }
  reset(){
    this.registerForm.reset();

  }




}

