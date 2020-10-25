import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
  <a class="navbar-brand" [routerLink]="['/']">NGRX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" [routerLink]="['/customers']">Customers</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
    </ul>
  </div>
</nav>
  `
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}