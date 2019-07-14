import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/shared/services/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit {
  public id: any;
  public film: any = {};

  constructor(
    public api: FilmsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.film = this.api.getFilm(this.id);
    });
  }
}
