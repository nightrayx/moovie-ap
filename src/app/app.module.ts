import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';
import { HomeComponent } from './home/home.component';
import { FilmDetailComponent } from './film/detail/film-detail/film-detail.component';
import { SerieDetailComponent } from './serie/detail/serie-detail/serie-detail.component';
import { ListeFilmComponent } from './home/liste-film/liste-film.component';
import { ListeSerieComponent } from './home/liste-serie/liste-serie.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    FilmComponent,
    SerieComponent,
    HomeComponent,
    FilmDetailComponent,
    SerieDetailComponent,
    ListeFilmComponent,
    ListeSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
