import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { FilmsService } from 'src/app/shared/services/films.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { FilmsModule } from './films/films.module';
import { RankingModule } from './ranking/ranking.module';
import { HttpClientModule } from '@angular/common/http';


import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonsModule,
    FilmsModule,
    RankingModule,
    UserModule
  ],
  providers: [FilmsService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
