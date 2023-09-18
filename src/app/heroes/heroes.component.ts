import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

// hero is defined as a parameter of the onSelect method:

// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }

// Here, hero is a parameter that represents an instance of the Hero interface. In Angular, interfaces are used to define the structure or shape of objects. In this case, the Hero interface is expected to describe the structure of an object that represents a hero.

// Hero is most likely an interface or a class defined somewhere in your project.
// This interface Hero probably defines the structure of a hero object, which may include properties like id and name.

// this.selectedHero = hero; assigns the hero object received as an argument to the selectedHero property of the component.
// Here's a summary:

// onSelect(hero: Hero) is a method that takes a parameter named hero. This parameter is expected to be an object that conforms to the structure defined by the Hero interface.

// this.selectedHero = hero; sets the value of selectedHero, a property of the component, to the object received as an argument.

// So, when onSelect is called, it expects a Hero object, and it will set selectedHero to that object, effectively updating which hero is currently selected in the component. This is a common pattern in Angular applications for handling user interactions.
