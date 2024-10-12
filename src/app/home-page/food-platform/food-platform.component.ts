import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddRestaurantComponent } from 'src/app/add-restaurant/add-restaurant.component';
import { Interface } from 'src/app/interface';

@Component({
  selector: 'app-food-platform',
  templateUrl: './food-platform.component.html',
  styleUrls: ['./food-platform.component.scss']
})


export class FoodPlatformComponent implements OnInit{
  constructor(public dialog: MatDialog,

  ) {
  }

  ngOnInit(): void {

  }

  openForm(){
          this.dialog.open(AddRestaurantComponent);

  }

listOfRest = [{
  name:"mcD",
  location:"indira nagar",
  phoneNumber:"9988776623",
},
{
  name:"starbucks",
  location:"Hari nagar",
  phoneNumber:"9923456623",
},
{
  name:"mcD",
  location:"Kora",
  phoneNumber:"9988774578",
}]

// iconOptions: Interface[] = [
//   {value: 'del-0', viewValue: 'Delete'},
//   {value: 'edit-1', viewValue: 'Edit'},
// ];

clickme()
{

  console.log("something")
}
}