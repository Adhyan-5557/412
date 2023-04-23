import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {Input} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';



export interface appPhotos {
  photo_id: number;
  caption: string;
  data: number;
  album_id: number;
  tag: string;
 

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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  numberOfLikes: number = 1;

  onClick3() {
    this.numberOfLikes++;
  }
  constructor(private router: Router) {
  }
  displayedColumns: string[] = [ 'name'];
  dataSource = new MatTableDataSource(ALBUM_DATA);

  displayedColumns2: string[] = ['caption', 'data', 'tag'];
  dataSource2 = new MatTableDataSource(PHOTO_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue2: string) {
    this.dataSource2.filter = filterValue2.trim().toLowerCase();
  }

  



  onClick() {
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    this.router.navigateByUrl('');
  }
  onClick2() {
    // this is to submit the login form. upon clicking it redirects pace to home screen. 
    this.router.navigateByUrl('');
  }

 

}
