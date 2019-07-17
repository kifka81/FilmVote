import { Component, OnInit } from '@angular/core';
import { films } from 'src/app/shared/films-list';
import { FilmList } from 'src/app/shared/classes/film-list';
import { FilmsService } from 'src/app/shared/services/films.service';


@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})

export class AllFilmsComponent implements OnInit {
  films: Array<FilmList> = films;
  searchTerm: string;
  
  constructor(public api: FilmsService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
  }
}
