import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector:"hero-list",
    template:`
        <h1>Tour of Heroes ({{mode}})</h1>
        <h3>Heroes:</h3>
        <ul>
        <li *ngFor="let hero of heroes">
            {{hero.name}}
        </li>
        </ul>
        <label>New hero name: <input #newHeroName /></label>
        <button (click)="addHero(newHeroName.value); newHeroName.value=''">Add Hero</button>
        <label>New hero name: <input #newHeroNameDel /></label>
        <button (click)="delHero(newHeroNameDel.value); newHeroNameDel.value=''">delHero</button>
        <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
    `
})
export class HeroListComponent implements OnInit{
  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';
  constructor (private heroService: HeroService) {}
  ngOnInit() { this.getHeroes(); }
     getHeroes() {
      this.heroService.getHeroes()
                       .then(
                         heroes => this.heroes = heroes,
                         error =>  this.errorMessage = <any>error);
    }
    addHero (name: string) {
      if (!name) { return; }
      this.heroService.addHero(name)
                       .then(
                         hero  => { return this.heroes.push(hero)},
                         error =>  this.errorMessage = <any>error);
    }
    delHero( name: string ){
        if (!name) { return; }
        this.heroService.addHero(name)
                       .then(
                         hero => {
                             for( let i=0;i<this.heroes.length;i++ ){
                                if( this.heroes[i].name == name ){
                                    var id = this.heroes[i].id
                                    this.heroes.splice(i,1);  
                                }
                             };                      
                         return this.heroes},                         
                         error =>  this.errorMessage = <any>error);
    }

}