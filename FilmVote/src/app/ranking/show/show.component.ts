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
      new Item('The Shawshank Redemption', 'https://ultimatecourses.com/blog/typing-arrays-typescript', 'https://i.pinimg.com/originals/da/0d/cc/da0dcc87e0e8b776a5f88ef460834db1.jpg', 0),
      new Item('Angular Homepage', 'http://angular.io', 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', 1)];
    }
    sortedItems(): Item[] {
      return this.items.sort((a: Item, b: Item) => b.votes - a.votes);
    }

  ngOnInit() {
  }

}
