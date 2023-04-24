import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  photoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      photoName: ['', Validators.required],
      photoCaption: ['', Validators.required],
      photoTag: ['', Validators.required],
    });
  }

  addPhoto() {
    console.log(this.photoForm.valid);
  }
}
