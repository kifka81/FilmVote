import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilmsService } from 'src/app/shared/services/films.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { FilmsModule } from './films/films.module';
import { RankingModule } from './ranking/ranking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    FilmsModule,
    RankingModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
