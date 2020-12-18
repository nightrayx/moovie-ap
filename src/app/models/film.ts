export class Film {
  private id: number;
  private name: string;
  private poster_path: string;
  private overview: string;
  private title: string;
  private backdrop_path: string;

  constructor(id: number = 0, name: string = "", poster_path: string="",overview:string ="",title:string="",backdrop_path:string="") {
    this.id = id;
    this.name = name;
    this.poster_path = poster_path;
    this.overview = overview;
    this.title = title;
    this.backdrop_path = backdrop_path;
  }
}
