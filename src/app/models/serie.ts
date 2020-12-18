export class Serie {
  private _id: number;
  private _name: string;
  private _poster_path: string;

  constructor(id: number, name: string, poster_path: string) {
    this._id = id;
    this._name = name;
    this._poster_path = poster_path;
  }
}
