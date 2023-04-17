import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

 

  constructor(private fb: FormBuilder,private router: Router, private _dialog: MatDialog) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  onClick(){
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    this.router.navigateByUrl('/home');
  }

  onClick2(){
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    this._dialog.open(RegisterComponent);
  }

}