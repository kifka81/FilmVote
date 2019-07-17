import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Item } from '../../../shared/classes/item';

@Component({
  selector: 'app-top-show',
  templateUrl: './top-show.component.html',
  styleUrls: ['./top-show.component.scss']
})
export class TopShowComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() item: Item;

 constructor() { }

 voteUp(): boolean {
 this.item.voteUp();
 return false;
 }

 voteDown(): boolean {
 this.item.voteDown();
 return false;
 }

  ngOnInit() {
  }

}

