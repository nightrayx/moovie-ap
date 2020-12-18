import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviedbService {


  constructor() {}
  // constructor(private httpClient: HttpClient) { }

  // getFilms(): Observable<any[]> {
  //   return this.httpClient.get<any[]>("https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be")
  // }

  // getFilmById(id: number): Observable<any[]> {
  //   return this.httpClient.get<any[]>("https://api.themoviedb.org/3/movie/" + id + "?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR")
  // }

  // getSeries(): Observable<any[]> {
  //   return this.httpClient.get<any[]>("https://api.themoviedb.org/3/discover/tv?api_key=87dfa1c669eea853da609d4968d294be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&api_key=87dfa1c669eea853da609d4968d294be")
  // }

  // getSerieById(id: number): Observable<any[]> {
  //   return this.httpClient.get<any[]>("https://api.themoviedb.org/3/tv/" + id + "?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR")
  // }
}
