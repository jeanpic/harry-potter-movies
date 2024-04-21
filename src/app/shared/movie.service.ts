import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Movie} from "./model/movie";
import {MovieFilterOptions} from "./model/movie-filter-options";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("/movies");
  }

  getMovie(id: string | null): Observable<Movie> {
    if (id) {
      return this.http.get<Movie>(`/movies/${id}`);
    } else {
      return of();
    }
  }

  filterMovies(movies: Movie[], filteringValues: MovieFilterOptions): Movie[] {
    return movies?.filter((movie: Movie) => {
      const filteringYear: number | null | undefined = (filteringValues.releaseYear ?? 0) > 999 ? filteringValues.releaseYear : null;
      return movie.title.toLowerCase().includes(filteringValues.title?.toLowerCase() ?? '') &&
        (!filteringYear || new Date(movie.release_date).getFullYear() === filteringYear);
    })
  }
}
