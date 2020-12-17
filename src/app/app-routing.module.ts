import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"films", component: FilmComponent},
  {path:"series", component: SerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
