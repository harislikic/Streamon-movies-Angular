import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [

  {path:'',component:HomePageComponent},
  {path:'movie/:title',component : MovieDetailsComponent},
  {path:'login',component : LoginComponent},
  {path:'register',component : RegisterComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
