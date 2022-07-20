import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { Hero } from './Hero';
import { MessageService } from './message.service';
import { Heroes } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes : Observable<Hero[]> = of(Heroes)
  selectedHero?: Hero

  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> 
  { 
    this.messageService.addMessage("fetched heroes")
    return this.heroes
  } 

  getHero(id: number) : Observable<Hero>
  {
    //const hero = Heroes.filter(hero => hero.id === id)
    const hero = Heroes.find(h => h.id === id)!;
    return of(hero)
    //return of(hero[0])
  }
}
