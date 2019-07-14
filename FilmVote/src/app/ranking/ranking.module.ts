import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    RankingRoutingModule
  ],
  exports: [ShowComponent]
})
export class RankingModule { }
