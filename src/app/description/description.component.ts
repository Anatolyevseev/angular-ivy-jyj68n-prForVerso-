import { Component, OnInit } from '@angular/core'; 
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit  {
  public des;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let des = this.route.snapshot.paramMap.get('description');
    this.des = des;
    
   
    }
  }

