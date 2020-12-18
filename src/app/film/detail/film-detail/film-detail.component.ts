import { Component, OnInit, Input } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Film } from '../../../models/film';
import { MoviedbService } from '../../../services/moviedb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  id!: number;
  filmDetails: Film[] = [];
  subscription: Subscription = new Subscription();

  constructor(private moviedbService: MoviedbService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.filmDetails = this.moviedbService.getFilmById(this.id)
      .subscribe(data => {
        this.filmDetails = data;
        console.log(data);
        console.log(this.id);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
