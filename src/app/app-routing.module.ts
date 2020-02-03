import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HealthComponent } from './health/health.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { SearchComponent } from './search/search.component';
import { DiseasesComponent } from './diseases/diseases.component';


const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
{path:'home' , component:HomeComponent} , 
{path:'health' , component:HealthComponent} , 
{path:'medicines' , component:MedicinesComponent} ,
{path:'diseases' , component:DiseasesComponent} , 

{path:'search' , component:SearchComponent} , 


{path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
