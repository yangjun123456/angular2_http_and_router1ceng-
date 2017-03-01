import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/http" routerLinkActive="active">http</a>
      <a routerLink="/jsonp" routerLinkActive="active">jsonp</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';
    
}