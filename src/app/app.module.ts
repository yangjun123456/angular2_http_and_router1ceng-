import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';
import { RouterModule, Routes,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
//服务模块

import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module';
//模拟服务器获取数据

import {AppComponent} from './app.component';
import {HeroListComponent} from './hero-list.component';
import {WikiComponent} from './wiki/wiki.component';
//组件

import { HeroService } from './hero.service';
import { WikipediaService } from './wiki/wikipedia.service';
import { HeroData } from './hero-data';

const appRoutes: Routes = [
      { path: 'http', component: HeroListComponent },
      { path: 'jsonp', component: WikiComponent },
      { path: '', component: HeroListComponent }
    ];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        InMemoryWebApiModule.forRoot(HeroData),
        RouterModule.forRoot(appRoutes)        
    ],
    declarations: [
        AppComponent,
        HeroListComponent,
        WikiComponent,
    ],
    bootstrap: [AppComponent],
    providers:[ HeroService,WikipediaService ]
})

export class AppModule {
}