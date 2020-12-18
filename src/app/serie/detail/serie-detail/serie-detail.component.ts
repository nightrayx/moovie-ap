import { Component, OnInit, Input } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Serie } from '../../../models/serie';
import { MoviedbService } from '../../../services/moviedb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  id!: number;
  serieDetails: Serie[] = [];
  subscription: Subscription = new Subscription();

  constructor(private moviedbService: MoviedbService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.serieDetails = this.moviedbService.getSerieById(this.id)
      .subscribe(data => {
        this.serieDetails = data;
        console.log('data',data);
        console.log(this.id);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
