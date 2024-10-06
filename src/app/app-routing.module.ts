import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';

const routes: Routes = [{path:"add-restaurant",component:AddRestaurantComponent}
  ,{path:"", loadChildren: () => import ('../app/home-page/home-page.module').then(m => m.HomePageModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
