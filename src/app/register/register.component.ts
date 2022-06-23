import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  txtfirstname : any;
  txtlastname: any;
  txtemail:any
  txtusername : any;
  txtpassword : any;

  users : any;

  constructor(private   httpClient : HttpClient, private  route : Router) { }

  ngOnInit(): void {
    this.loadusers();
  }
  loadusers()
  {
    this.httpClient.get("https://localhost:44300/User/GetAllUsers").subscribe((x:any)=>{

      this.users = x;
      console.log(x);
    })
  }

  btnregister() {
    let data={
      firstName : this.txtfirstname,
      lastName : this.txtlastname,
      email : this.txtemail,
      username : this.txtusername,
      password : this.txtpassword
    };
    this.httpClient.post("https://localhost:44300/User/AddUser",data).subscribe((x:any)=>
    {
      if(x!=null)
      {

        alert("Succeseful registration: " + this.txtusername);
        this.route.navigateByUrl("/login");
      }
      else
      {
        alert("Error in registration")
      }

    });

  }
}
