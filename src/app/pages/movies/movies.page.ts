import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm ='';
  type: SearchType = SearchType.all;

  constructor(private movieservice : MovieService) { }

  ngOnInit() {
  }

  searchChanged(){
    this.results = this.movieservice.searchData(this.searchTerm,this.type);
  }
}
