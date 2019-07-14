import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmsRoutingModule } from './films-routing.module';
import { AllFilmsComponent } from './all-films/all-films.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [AllFilmsComponent, FilmComponent],
  imports: [
    CommonModule,
    RouterModule,
    FilmsRoutingModule
  ],
  exports: [AllFilmsComponent, FilmComponent]
})
export class FilmsModule { }
