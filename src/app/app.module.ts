import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from  '@angular/material/input';
import { AppComponent } from './app.component';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from './comments/comments.module';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    DropDownListModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatRadioModule,
    MatExpansionModule,
    HttpClientModule,
    CommentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
