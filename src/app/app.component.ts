import { Component } from '@angular/core';
import {AutentifikacijaHelper} from "./login-info/authentification-help";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MojConfig} from "./moj-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';

  isLogiran:boolean = AutentifikacijaHelper.getLoginInfo().isLogiran;

  constructor(private httpClient : HttpClient,private  router:Router) {}

  ngOnInit():void{
    console.log("log na pokretanju  stranice  " , this.isLogiran);

  }


  logout(){

    if(this.isLogiran==true)
    {
      this.httpClient.post("https://localhost:44300/Authentification/Logout", MojConfig.http_opcije())
        .subscribe((x:any)=>{
          this.router.navigate(['/login']) .then(() => {
            window.location.reload();
          });
        })
      AutentifikacijaHelper.setLoginInfo(null as any);
    }
    else {
      this.router.navigateByUrl("/login");
    }



    }



}
