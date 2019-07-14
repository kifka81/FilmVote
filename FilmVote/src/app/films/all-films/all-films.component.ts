import { Component, OnInit } from '@angular/core';
import { Film, films } from 'src/app/films-list';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})

export class AllFilmsComponent implements OnInit {
  films: Array<Film> = films;

  constructor(public api: FilmsService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
  }
}
