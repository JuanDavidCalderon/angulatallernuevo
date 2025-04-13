import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { series } from './datos';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  standalone:false
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  constructor() { }
  
  getSerieList(): Array<Serie> {
    return series;
  }


  
  

  ngOnInit() {
    this.series = this.getSerieList();
    
  }

}
