import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-liste-serie',
  templateUrl: './liste-serie.component.html',
  styleUrls: ['./liste-serie.component.css']
})
export class ListeSerieComponent implements OnInit {

  constructor(private moviedbService: MoviedbService) {
  }

  series: Serie[] = [];

  ngOnInit(): void {
    // this.moviedbService.getSeries().subscribe(response => {
    //   this.series = response;
    // })
  }
}
