import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = '412_project';

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
}



