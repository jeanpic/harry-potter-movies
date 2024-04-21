import {Component, inject} from '@angular/core';
import {MovieService} from "../shared/movie.service";
import {AsyncPipe} from "@angular/common";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {combineLatest, map, Observable, startWith} from "rxjs";
import {Movie} from "../shared/model/movie";
import {MovieFiltersComponent} from "../movie-filters/movie-filters.component";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {MovieFilterOptions} from "../shared/model/movie-filter-options";

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

  movies$: Observable<Movie[]> = combineLatest([
    this.movieService.getMovies(),
    this.filteringForm.valueChanges.pipe(startWith<MovieFilterOptions>({title: "", releaseYear: null}))
  ]).pipe(
    map(([movies, filteringValues]: [Movie[], MovieFilterOptions]): Movie[] => this.movieService.filterMovies(movies, filteringValues))
  );

  constructor(private formBuilder: FormBuilder) {
  }
}
