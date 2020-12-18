import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
import { Film } from '../../models/film';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  constructor(private moviedbService: MoviedbService) {
  }

  films: Film[] = [];
  subscription : Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.moviedbService.getFilms().pipe(
      map((data) => data.results))
      .subscribe(value => { value.map(data => this.films.push(new Film(data.id, data.name, data.poster_path)))
        console.log(value)
      console.log(this.films)})
    }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
