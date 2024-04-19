import {Component} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Movie} from "../shared/model/movie";
import {map, Observable} from "rxjs";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {DollarCurrencyPipe} from "../shared/pipes/dollar-currency.pipe";
import {DurationPipe} from "../shared/pipes/duration.pipe";
import {DelimitedArrayPipe} from "../shared/pipes/delimited-array.pipe";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    NgIf,
    DollarCurrencyPipe,
    DurationPipe,
    RouterLink,
    DelimitedArrayPipe
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie$: Observable<Movie> = this.activatedRoute.data.pipe(map(data => data['movie']));

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
