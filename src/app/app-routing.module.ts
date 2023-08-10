import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmtListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';


const routes: Routes = [
  {
    path: 'films',
    component: FilmtListComponent,
  },
  {
    path: 'films/:id',
    component: FilmComponent,
  },
  {
    path: 'newFilm',
    component: FilmsComponent,
  },
  {
    path: 'films/update/:id',
    component: UpdateFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
