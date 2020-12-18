import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor() { }

  @Input() film: any;

  ngOnInit(): void {
    console.log('film',this.film)
  }
}
