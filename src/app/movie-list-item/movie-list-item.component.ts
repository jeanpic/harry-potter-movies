import {Component, input} from '@angular/core';
import {Movie} from "../shared/model/movie";
import {RouterLink} from "@angular/router";
import {DollarCurrencyPipe} from "../shared/pipes/dollar-currency.pipe";
import {DurationPipe} from "../shared/pipes/duration.pipe";

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [
    DurationPipe,
    DollarCurrencyPipe,
    RouterLink
  ],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent {
  movie = input<Movie>()
}
