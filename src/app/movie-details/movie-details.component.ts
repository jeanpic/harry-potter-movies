import {Component} from '@angular/core';
import {ActivatedRoute, Data, RouterLink} from "@angular/router";
import {Movie} from "../shared/model/movie";
import {map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {DollarCurrencyPipe} from "../shared/pipes/dollar-currency.pipe";
import {DurationPipe} from "../shared/pipes/duration.pipe";
import {SpacedArrayPipe} from "../shared/pipes/spaced-array.pipe";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    AsyncPipe,
    DollarCurrencyPipe,
    DurationPipe,
    RouterLink,
    SpacedArrayPipe
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie$: Observable<Movie> = this.activatedRoute.data.pipe(map((data: Data) => data['movie']));

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
