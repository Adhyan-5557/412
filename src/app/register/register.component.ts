import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormControlName, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private _fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { 

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

  ngOnInit():void {
    this.registerForm.patchValue(this.data)

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
      this.userService.addUser(this.registerForm.value).subscribe({
        next: (val:any) => { 
          alert('User added successfully'); 
          this.dialogRef.close(); 

          
        },
        error: (err:any) => {
          console.error(err);
        }
      });
    }
    this.router.navigateByUrl('/home');
  }

  onClick4(){
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    
    this.router.navigateByUrl('/login');
  }



}