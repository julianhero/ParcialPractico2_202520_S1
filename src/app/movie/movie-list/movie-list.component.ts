import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { moviesData } from '../moviesData';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie!: Movie ;

  constructor(private movieService: MovieService) {}

  getMovies(): void {
    this.movieService.getMovie().subscribe((movies) => 
      {this.movies = movies});
  }
  
  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }

  ngOnInit() {
    this.getMovies();  }
}
