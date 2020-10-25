// app-routing.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {} from '../app/customers/customers.module'
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customers",
    loadChildren: () => import('../app/customers/customers.module').then(m=>m.CustomersModule)
  } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {}