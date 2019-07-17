import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/classes/item';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  items: Item[];

  constructor() {
    this.items = [
      new Item('Cold War', ' ', 'https://m.media-amazon.com/images/M/MV5BNTJmNzExOGItZTQyMi00YzBlLTk0ZTQtNzAxYmUwZDQwZjU4XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_SX300.jpg', 0),
      new Item('Pulp Fiction', ' ', 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 0),
      new Item('The Lives of Others', '', 'https://m.media-amazon.com/images/M/MV5BOThkM2EzYmMtNDE3NS00NjlhLTg4YzktYTdhNzgyOWY3ZDYzXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg', 0),
      new Item('Taxi Driver', '', 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 0),
      new Item('Roma', '', 'https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg', 0),
      new Item('Eternal Sunshine of the Spotless Mind', '', 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg', 0),
      new Item('Belle de Jour', '', 'https://m.media-amazon.com/images/M/MV5BZjNkNGJjYWEtM2IyNi00ZjM5LWFlYjYtYjQ4NTU5MGFlMTI2XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg', 0),
      new Item('The Piano Teacher', '', 'https://m.media-amazon.com/images/M/MV5BZDBkYjYxYjUtMTdmMS00MDJhLWEyNzktYzg2OWY5NWY0Y2QyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg', 0),
      new Item('The Florida Project', '', 'https://m.media-amazon.com/images/M/MV5BMjg4ZmY1MmItMjFjOS00ZTg2LWJjNDYtNDM2YmM2NzhiNmZhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg', 0),
      new Item('Coco', '', 'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg', 0)];
    }
    sortedItems(): Item[] {
      return this.items.sort((a: Item, b: Item) => b.votes - a.votes);
    }

  ngOnInit() {
  }

}
