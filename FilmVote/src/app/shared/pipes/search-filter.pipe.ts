import { Pipe, PipeTransform } from '@angular/core';
import { FilmList } from 'src/app/shared/classes/film-list';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(films: FilmList[], searchTerm: string): FilmList[] {

    if (!searchTerm || searchTerm === '') { return films; }
    searchTerm = searchTerm.toLowerCase();
    return films.filter((film) => film.title.toLowerCase().includes(searchTerm));
  }

}
