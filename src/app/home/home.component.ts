import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
  <div class="container">
  <div class="jumbotron">
    <h1 class="display-4">Welcome</h1>
    <p class="lead">Please seldct your option below</p>
    <hr class="my-4">
    <p class="lead">
      <a class="btn btn-primary btn-lg" [routerLink]="['customers']" role="button">Customers</a>
    </p>
  </div>
</div>`
})

export class HomeComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {
  }

}