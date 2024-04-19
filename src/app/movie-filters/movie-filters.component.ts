import {Component, input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-movie-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './movie-filters.component.html',
  styleUrl: './movie-filters.component.css'
})
export class MovieFiltersComponent {
  filteringForm = input.required<FormGroup>()
}
