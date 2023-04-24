import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormControlName, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router, private _fb: FormBuilder) { 
    this.registerForm = this._fb.group({
      firstname:'',
      lastname: '',
      email: '',
      DOB: '',
      gender: '',
      password: '',
      hometown:''

    });
  }

  ngOnInit(){

  }

  registerForm = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    DOB: new FormControl(""),
    gender: new FormControl(""),
    password: new FormControl(""),
    hometown: new FormControl("")


  });

  onClick3(){
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
    this.router.navigateByUrl('/home');
  }

  onClick4(){
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    
    this.router.navigateByUrl('/login');
  }



}
