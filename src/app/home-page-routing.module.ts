import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FoodPlatformComponent } from './home-page/food-platform/food-platform.component';
import { MenuComponent } from './home-page/menu/menu.component';


const routes: Routes = [
  {path:"", component:MenuComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
