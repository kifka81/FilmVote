import { Injectable } from '@angular/core';
import { Film, films } from 'src/app/films-list';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {
  films: Array<Film> = films;
  constructor() { }

  getFilms() {
    return this.films;
  }

  getFilm(id: string) {
    let film: Film;

    this.films.forEach((singleFilm) => {
      if (singleFilm.id === Number(id)) {
        film = singleFilm;
      }
    });
    return film;
  }
}
