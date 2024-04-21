import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieFiltersComponent} from './movie-filters.component';
import {ComponentRef} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

describe('MovieFilterComponent', () => {
  let component: MovieFiltersComponent;
  let componentRef: ComponentRef<MovieFiltersComponent>
  let fixture: ComponentFixture<MovieFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFiltersComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('filteringForm', new FormGroup({
      title: new FormControl<string>(""),
      releaseYear: new FormControl<number | null>(null)
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
