import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmsRoutingModule } from './films-routing.module';
import { AllFilmsComponent } from './all-films/all-films.component';
import { FilmComponent } from './film/film.component';
import { SearchFilterPipe } from '../shared/pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllFilmsComponent, FilmComponent, SearchFilterPipe],
  imports: [
    CommonModule,
    RouterModule,
    FilmsRoutingModule,
    FormsModule    
  ],
  exports: [AllFilmsComponent, FilmComponent]
})
export class FilmsModule { }
