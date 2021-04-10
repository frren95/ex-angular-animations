import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { slideAnimation } from './animations';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top mb-4 " style="background-color:#5c2509;">
      <a class="navbar-brand" href="#">Angular Animations</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-home" routerLinkActive="active">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-basics" routerLinkActive="active">Basics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-contained" routerLinkActive="active">Contained</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-advanced" routerLinkActive="active">Advanced</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="page" [@routerAnimations]="prepareRouteTransition(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routerAnimations', [
      transition('* => *', slideAnimation)
    ])
  ]
})
export class AppComponent {
  prepareRouteTransition(outlet: { activatedRouteData: { [x: string]: {}; }; }) {
    const animation: {[x: string]: {};} = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
