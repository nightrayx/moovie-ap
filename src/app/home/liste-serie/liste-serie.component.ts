import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
import { Serie } from '../../models/serie';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-serie',
  templateUrl: './liste-serie.component.html',
  styleUrls: ['./liste-serie.component.css']
})
export class ListeSerieComponent implements OnInit {

  constructor(private moviedbService: MoviedbService) {
  }

  series: Serie[] = [];
  subscription : Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.moviedbService.getSeries().pipe(
      map((data) => data.results))
      .subscribe(value => { value.map(data => this.series.push(new Serie(data.id, data.name, data.poster_path)))
        console.log(value)
      console.log(this.series)})
    }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
