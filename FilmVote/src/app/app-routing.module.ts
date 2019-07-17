import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { AllFilmsComponent } from './films/all-films/all-films.component';
import { FilmComponent } from './films/film/film.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { ShowComponent } from './ranking/show/show.component';

const routes: Routes = [
  {path: '', redirectTo: 'ranking', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'films', component: AllFilmsComponent},
  {path: 'film/:id', component: FilmComponent},
  {path: 'ranking', component: ShowComponent},
  {path: 'user/login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
