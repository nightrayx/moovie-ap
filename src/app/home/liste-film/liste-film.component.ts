import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
import { Film } from '../../models/film';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  constructor(private moviedbService: MoviedbService) {
  }

  films: Film[] = [];

  ngOnInit(): void {
    // this.moviedbService.getFilms().subscribe(response => {
    //   this.films = response;
    // })
  }
}
