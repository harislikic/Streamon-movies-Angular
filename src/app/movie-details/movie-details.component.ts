import {Component, Injectable, Input, OnInit, Pipe} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {AutentifikacijaHelper} from "../login-info/authentification-help";



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})


export class MovieDetailsComponent implements OnInit {

  Movie:any;
  Movieid:any = this.route.snapshot.paramMap.get('title');
  safeUrl: any;
  genres : any;
  isLogiran:boolean = AutentifikacijaHelper.getLoginInfo().isLogiran;
  loguser:any;
  comments  : any;

  constructor(private route :ActivatedRoute,private httpKlijent : HttpClient ,private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    if(AutentifikacijaHelper.getLoginInfo().isLogiran==true) {
      this.loguser = AutentifikacijaHelper.getLoginInfo().autentifikacijaToken.accountId;
      this.loadloguser();
    }

    this.loadMovie();

  }

  loadMovie()
  {
      this.httpKlijent.get( 'https://localhost:44300/Movies/GetMovieName?name='+ this.Movieid)
      .subscribe((x:any)=>{
        this.Movie=x;
        console.log('movie details',this.Movie);
      });
  }
  loadloguser()
  {
    this.httpKlijent.get("https://localhost:44300/User/GetUser/"+AutentifikacijaHelper.getLoginInfo().autentifikacijaToken.accountId)
      .subscribe((x:any)=>{
        console.log('log user' ,x);
      this.loguser = x;

    });
  }
  loadcomments()
  {

  }


  getSafeUrl(url:any){
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XztaW2MXPKs");
  }


}
