import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { ShowComponent } from './show/show.component';
import { TopShowComponent } from './show/top-show/top-show.component';

@NgModule({
  declarations: [ShowComponent, TopShowComponent],
  imports: [
    CommonModule,
    RankingRoutingModule
  ],
  exports: [ShowComponent, TopShowComponent]
})
export class RankingModule { }
