import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';
import { FilmDetailComponent } from './film/detail/film-detail/film-detail.component';
import { SerieDetailComponent } from './serie/detail/serie-detail/serie-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "films", component: FilmComponent },
  { path: "series", component: SerieComponent },
  { path: "detailFilm", component: FilmDetailComponent },
  { path: "detailSerie", component: SerieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
