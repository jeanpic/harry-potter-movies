import {Component, inject, TrackByFunction} from '@angular/core';
import {MovieService} from "../shared/movie.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {combineLatest, map, Observable, startWith} from "rxjs";
import {Movie} from "../shared/model/movie";
import {MovieFiltersComponent} from "../movie-filters/movie-filters.component";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    AsyncPipe,
    MovieListItemComponent,
    MovieFiltersComponent,
    ReactiveFormsModule
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movieService = inject(MovieService)
  filteringForm = this.formBuilder.group({
    title: new FormControl<string>(""),
    releaseYear: new FormControl<number | null>(null)
  });

  movies$: Observable<Movie[]> = combineLatest([this.movieService.getMovies(),
    this.filteringForm.valueChanges.pipe(startWith({title: "", releaseYear: null}))]).pipe(
    map(([movies, filteringValues]) => movies?.filter(movie => {
          const filteringYear: number | null | undefined = (filteringValues.releaseYear ?? 0) > 999 ? filteringValues.releaseYear : null;
          return movie.title.toLowerCase().includes(filteringValues.title?.toLowerCase() ?? '') &&
            (!filteringYear || new Date(movie.release_date).getFullYear() === filteringYear);
        }
      )
    ));

  constructor(private formBuilder: FormBuilder) {
  }
}
