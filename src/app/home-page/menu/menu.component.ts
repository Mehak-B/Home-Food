import { Component, Inject, OnInit } from '@angular/core';
import { FoodPlatformComponent } from '../food-platform/food-platform.component';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { AddRestaurantComponent } from 'src/app/add-restaurant/add-restaurant.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
menu = ["About","Restaurants"];
showFoodPlatform:boolean = false;


constructor(public dialog: MatDialog,

) {
}

ngOnInit(){
  // console.log(this.data)


}

navButton(itm:any){
  console.log(itm)
  if(itm == "Restaurants"){
    this.showFoodPlatform = true;
      // this.dialog.open(FoodPlatformComponent);

  }else{
    this.showFoodPlatform = false;



  }
}



}
