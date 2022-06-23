import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginInformacije} from "../login-info/logInfo";
import {AutentifikacijaHelper} from "../login-info/authentification-help";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  txtpassword:any;
  txtusername:any;
  User: any;


  constructor(private httpClient : HttpClient, private  router : Router ) { }

  ngOnInit(): void {
  }

  btnlogin() {
    let data = {
      username:this.txtusername,
      password:this.txtpassword
    };
    this.httpClient.post<LoginInformacije>( "https://localhost:44300/Authentification/Login",data)
      .subscribe((x:any)=>{
        if(x!=null)
        {
          console.log("x",x);
          AutentifikacijaHelper.setLoginInfo(x);
          this.httpClient.get("https://localhost:44300/User/GetUser/"+x.autentifikacijaToken.accountId)
            .subscribe((x=>{
              this.User = x;
              alert("Succeseful login");
              this.router.navigateByUrl("").then(() => {
                window.location.reload();
              });

            }));
        }
        else{
          AutentifikacijaHelper.setLoginInfo(null as any)
          alert("Login failed, please try again!");
        }
      });


  }




}
