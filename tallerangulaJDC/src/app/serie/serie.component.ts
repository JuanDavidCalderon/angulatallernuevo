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
  temporadasPromedio: string = '';
  constructor() { }
  
  getSerieList(): Array<Serie> {
    return series;
  }

  getTemporadasPromedio(series: Serie[]): string {
    const totalTemporadas = series.reduce((sum, s) => sum + s.temporadas, 0);
    return `Temporadas Promedio: ${totalTemporadas / series.length}`;
  }


  
  

  ngOnInit() {
    this.series = this.getSerieList();
    this.temporadasPromedio=this.getTemporadasPromedio(this.series)

    
    
  }

}
