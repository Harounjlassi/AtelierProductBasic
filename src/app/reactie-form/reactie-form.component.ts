import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm=new FormGroup({firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    adress: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
    })
    });  

  }
  onSubmit(){
    console.log(this.registerForm.value);
  }
  reset(){
    this.registerForm.reset();
  }



}
