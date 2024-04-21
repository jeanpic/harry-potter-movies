import {Routes} from '@angular/router';
import {movieDetailsResolver} from "./movie-details/movie-details.resolver";

export const routes: Routes = [
  {
    path: 'movies/:id',
    loadComponent: () => import('./movie-details/movie-details.component').then(c => c.MovieDetailsComponent),
    resolve: {
      movie: movieDetailsResolver
    }
  },
  {path: '**', loadComponent: () => import('./movie-list/movie-list.component').then(c => c.MovieListComponent)}
];
