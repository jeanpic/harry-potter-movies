import {inject, Injectable, InputSignal, Signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {Observable, of} from "rxjs";
import {Movie} from "./model/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("/movies");
  }

  getMovie(id: string | null): Observable<Movie> {
    if(id) {
      return this.http.get<Movie>(`/movies/${id}`);
    } else {
      return of();
    }
  }
}
