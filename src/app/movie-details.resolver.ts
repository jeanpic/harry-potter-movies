import { ResolveFn } from '@angular/router';
import {MovieService} from "./shared/movie.service";
import {inject, input} from "@angular/core";
import {Observable} from "rxjs";
import {Movie} from "./shared/model/movie";

export const movieDetailsResolver: ResolveFn<Observable<Movie>> = (route, state) => {
  let movieService = inject(MovieService);
  return movieService.getMovie(route.paramMap.get('id'));
};
