import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodPlatformComponent } from './food-platform/food-platform.component';
import { HomePageRoutingModule } from '../home-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    FoodPlatformComponent,
    MenuComponent,
  
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatDialogModule
  
  
  
  ]
})
export class HomePageModule { }
