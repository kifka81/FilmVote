import { Injectable } from '@angular/core';
import { films } from 'src/app/shared/films-list';
import { FilmList } from 'src/app/shared/classes/film-list';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {
  films: Array<FilmList> = films;
  constructor() { }

  getFilms() {
    return this.films;
  }

  getFilm(id: string) {
    let film: FilmList;

    this.films.forEach((singleFilm) => {
      if (singleFilm.id === Number(id)) {
        film = singleFilm;
      }
    });
    return film;
  }
}
