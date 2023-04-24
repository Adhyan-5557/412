import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';



import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';


import {Input} from '@angular/core';

import { RegisterComponent } from '../register/register.component';


import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';





export interface appPhotos {
  photo_id: number;
  caption: string;
  data: number;
  album_id: number;
  tag: string;
 

}

export interface topContributor {
  score: number;
  fname: string;
  lname: string;
}



export interface appAlbums {
  user_id: number;
  name: string;
  album_id: number;


}

export interface appUsers {
  user_id: number;
  fname: string;
  lname: string;
  friend_id: number;

}

const ALBUM_DATA: appAlbums[] =
  [

    { user_id: 1, name: 'Album1', album_id: 1 },
    { user_id: 2, name: 'Album2', album_id: 2 },
    { user_id: 3, name: 'Album3', album_id: 3 },
    { user_id: 4, name: 'Album4', album_id: 4 },
    { user_id: 5, name: 'Album5', album_id: 5 },
    { user_id: 6, name: 'Album6', album_id: 6 },
    { user_id: 7, name: 'Album7', album_id: 7 },
    { user_id: 8, name: 'Album8', album_id: 8 },
    { user_id: 9, name: 'Album9', album_id: 9 },
    { user_id: 10, name: 'Album10', album_id: 10 }


  ]



const USER_DATA: appUsers[] =
  [
    { user_id: 1, fname: 'Krasinksi', lname: 'John', friend_id: 2 },
    { user_id: 2, fname: 'Raj', lname: 'Golla', friend_id: 3 },
    { user_id: 3, fname: 'Victor', lname: 'Rabadan', friend_id: 5 },
    { user_id: 4, fname: 'Adhyan', lname: 'Vaghasia', friend_id: 5 },
    { user_id: 5, fname: 'Omar', lname: 'Hernandez', friend_id: 1 },
    { user_id: 6, fname: 'Hugh', lname: 'Jackman', friend_id: 3 },
    { user_id: 7, fname: 'Jack', lname: 'Nicholson', friend_id: 4 },
    { user_id: 8, fname: 'Emma', lname: 'Watson', friend_id: 9 },
    { user_id: 9, fname: 'Lisa', lname: 'Mona', friend_id: 8 },
    { user_id: 10, fname: 'Nick', lname: 'Fury', friend_id: 1 },



  ]


const PHOTO_DATA: appPhotos[] =
  [
    { photo_id: 1, caption: 'This is my photo', data: 1011, album_id: 1, tag: "ohheythere"},
    { photo_id: 2, caption: 'This is my photo2', data: 1010, album_id: 1, tag: "sundayfunday" },
    { photo_id: 3, caption: 'This is my photo3', data: 1111, album_id: 2, tag: "letitbe"},
    { photo_id: 4, caption: 'This is my photo4', data: 1110, album_id: 3, tag: "hey" },
    { photo_id: 5, caption: 'This is my photo5', data: 1100, album_id: 4, tag: "ican" },
    { photo_id: 6, caption: 'This is my photo6', data: 1000, album_id: 5, tag: "hey" },
    { photo_id: 7, caption: 'This is my photo7', data: 10101, album_id: 6, tag: "morningpic" },
    { photo_id: 8, caption: 'This is my photo8', data: 10111, album_id: 7, tag: "ithinkinselfies" },
    { photo_id: 9, caption: 'This is my photo9', data: 10011, album_id: 8, tag: "weekendphotodump" },
    { photo_id: 10, caption: 'This is my photo10', data: 10001, album_id: 9, tag: "enjoythelittlethingsinlife" }


  ]


const CONTRIBUTOR_DATA: topContributor[] =
  [
    
    
    { score: 23, fname: 'Hugh', lname: 'Jackman' },
    { score: 17, fname: 'Jack', lname: 'Nicholson' },
    { score: 11, fname: 'Emma', lname: 'Watson' },
    { score: 9, fname: 'Lisa', lname: 'Mona' },
    { score: 4, fname: 'Nick', lname: 'Fury' },


  ]


const COLUMNS_SCHEMA = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },

  {
    key: 'name',
    type: 'text',
    label: 'Full Name',
  },

  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  }

]









@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  num1 = 9;
  num2 = 18;
  num3 = 3;
  num4 = 11;
  num5 = 4;
  num6 = 2;
  num7 = 90;
  num8 = 2;
  num9 = 1;
  num10 = 0;

  like_1() {
    this.num1++;
  }

  like_2() {
    this.num2++;
  }

  like_3() {
    this.num3++;
  }

  like_4() {
    this.num4++;
  }
  like_5() {
    this.num5++;
  }
  like_6() {
    this.num6++;
  }
  like_7() {
    this.num7++;
  }
  like_8() {
    this.num8++;
  }
  like_9() {
    this.num9++;

  }
  like_10() {
    this.num10++;
  }



  
  added1 = '';
  added2 = '';
  added3 = '';
  added4 = '';
  added5 = '';
  added6 = '';
  added7 = '';
  added8 = '';
  added9 = '';
  added10 = '';

  btn1 = "add";


  add_1() {

    this.btn1 = "user added!";
    this.added1 = "friend added";
  }


  btn2 = "add";

  add_2() {
    this.btn2 = "user added!";
    this.added2 = "friend 2 added";
   
  }

  btn3 = "add";

  add_3() {
    this.btn3 = "user added!";
    this.added3 = "friend 3 added";
  }


  btn4 = "add";

  add_4() {
    this.btn4 = "user added!";
    this.added4 = "friend 4 added";
  }


  btn5 = "add";

  add_5() {
    this.btn5 = "user added!";
    this.added5 = "friend 5 added";
  }


  btn6 = "add";

  add_6() {
    this.btn6 = "user added!";
    this.added6 = "friend 6 added";
  }


  btn7 = "add";

  add_7() {
    this.btn7 = "user added!";
    this.added7 = "friend 7 added";
  }



  btn8 = "add";

  add_8() {
    this.btn8 = "user added!";
    this.added8 = "friend 8 added";
  }



  btn9 = "add";

  add_9() {
    this.btn9 = "user added!";
    this.added9 = "friend 9 added";
  }


  btn10 = "add";

  add_10() {
    this.btn10 = "user added!";
    this.added10 = "friend 10 added";
  }





 

  @ViewChild('dropdownlistelement')

  public dropdownlistObject!: DropDownListComponent;
  private addButtonElement: HTMLElement | null | undefined;
  onAddItems() {
    this.addButtonElement = document.getElementById('addButton');
    this.dropdownlistObject.addItem({ Fname: 'jordan', Id: 'friend4' });


  }

  

  public dataFields: Object = { text: ' Fname', value: 'Id' };
  public localData: Object[] = [

    { Fname: 'Omar Hernandez', Id: 'friend1' },
      { Fname: 'Omar Hernandez', Id: 'friend2' },
  { Fname: 'Omar Hernandez', Id: 'friend3' }



  ];












  constructor(private router: Router,private _dialog: MatDialog) {
  }


  displayedColumns: string[] = [ 'name'];
  dataSource = new MatTableDataSource(ALBUM_DATA);

  displayedColumns2: string[] = ['caption', 'data', 'tag'];
  dataSource2 = new MatTableDataSource(PHOTO_DATA);

  displayedColumns3: string[] = ['score', 'fname', 'lname'];
  dataSource3 = new MatTableDataSource(CONTRIBUTOR_DATA);


  displayedColumns4: string[] = [ 'fname', 'lname'];
  dataSource4 = new MatTableDataSource(USER_DATA);
  





  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue2: string) {
    this.dataSource2.filter = filterValue2.trim().toLowerCase();
  }

  

  


  userPage() {
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    const dialogRef = this._dialog.open(RegisterComponent,{
      
    })
  }
  onClick2() {
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    this.router.navigateByUrl('');
  }

 

}
