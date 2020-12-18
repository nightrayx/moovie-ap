import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeFilmComponent } from './home/liste-film/liste-film.component';
import { ListeSerieComponent } from './home/liste-serie/liste-serie.component';
import { FilmDetailComponent } from './film/detail/film-detail/film-detail.component';
import { SerieDetailComponent } from './serie/detail/serie-detail/serie-detail.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "films", component: ListeFilmComponent },
  { path: "series", component: ListeSerieComponent },
  { path: "detailFilm/:id", component: FilmDetailComponent },
  { path: "detailSerie/:id", component: SerieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
