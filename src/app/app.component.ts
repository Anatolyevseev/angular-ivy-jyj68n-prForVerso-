import { Component, VERSION } from '@angular/core';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { HomeComponent } from './home/home.component';
// import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent extends HomeComponent  {



  
}