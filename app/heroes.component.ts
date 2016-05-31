import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css']
})


export class HeroesComponent implements OnInit {
  title = 'Data List';
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService, private router: Router) { }
  
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero) { this.selectedHero = hero; }
  
  goToDetail() {
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
 
  }
}
