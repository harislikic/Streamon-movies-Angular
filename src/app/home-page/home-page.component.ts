import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Movies : any;
  Genres :any;

  constructor(private httpClient : HttpClient, private  router : Router) { }

  ngOnInit(): void {
    this.loadGenres();
    this.LoadMovies();

  }

  LoadMovies()
  {

      this.httpClient.get("https://localhost:44300/Movies/GetAllMovies").subscribe((x:any)=>{
        console.log(x);
        this.Movies = x;
      });

  }

  loadGenres()
  {
    this.httpClient.get('https://localhost:44300/MovieGenre/GetAllMovies').subscribe((x:any)=>{
      this.Genres =  x;
      console.log(x);
    });
  }


  filterSelection() {
    this.httpClient.get("https://localhost:44300/Movies/GetComedy").subscribe((x:any)=>{
      console.log('comedy',x);

      this.Movies = x;
    })
  }


  myFunction() {

  }

}
