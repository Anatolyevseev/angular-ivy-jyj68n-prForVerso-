import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
    {path:'', component:HomeComponent},
    {path:'desc/:description',component:DescriptionComponent}
  ])
  ],
  declarations: [ AppComponent, HelloComponent, DescriptionComponent, HomeComponent ],
  bootstrap:    [ AppComponent, HomeComponent ]
})
export class AppModule { }
