import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {MovieService} from "../shared/movie.service";
import {Movie} from "../shared/model/movie";

export const movieDetailsResolver: ResolveFn<Observable<Movie>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let movieService = inject(MovieService);
  return movieService.getMovie(route.paramMap.get('id'));
};
