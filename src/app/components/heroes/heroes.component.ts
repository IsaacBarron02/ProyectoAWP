import { Component,OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';



@Component({
    selector: 'app-heroes',
    templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit{
    heroes:any []=[];
    //traemos service
    constructor(private heroesService:HeroesService){
        
    }
    ngOnInit(){
        //como los datos estan llegando en heroes service heroes service ahora es un atributo
        this.heroes=this.heroesService.getHeroes();
    }
}
    