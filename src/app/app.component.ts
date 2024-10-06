import { Component, OnInit } from '@angular/core';
import { HomePageModule } from './home-page/home-page.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    console.log("home-page", HomePageModule)
  }
  
  title = 'Home-Food';

  
  
}
