import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

detailURL = "http://157.253.205.147:8080/api/movies"
detailURLID = "http://157.253.205.147:8080/api/movies/1"
constructor(private http: HttpClient) { }

getMovie():Observable<Movie[]>{
  return this.http.get<Movie[]>(this.detailURL);

}
  getMovieID(id: number):Observable<Movie>{
    return this.http.get<Movie>(this.detailURLID);


}
}