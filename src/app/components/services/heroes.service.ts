//sirven para extraer datos de varias paginas
import {Injectable} from '@angular/core';

@Injectable()
export class HeroesService{

    private heroes:any[]=
    [
        {nombre: 'iron man',
        biografia:'Iron Man es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue cocreado por el escritor y editor Stan Lee, desarrollado por el guionista Larry Lieber y diseñado por los artistas Don Heck y Jack Kirby. ',
        foto: 'assets/iron.jpg',
        fecha: '1990'},
        {nombre: 'spider man',
        biografia:'Spider-Man es un superhéroe ficticio creado por los escritores y editores Stan Lee y Steve Ditko. Apareció por primera vez en el cómic de antología Amazing Fantasy # 15, en la Edad de Plata de los cómics.',
        foto: 'assets/miles.jpg',
        fecha: '1995'},
        {nombre: 'wolverine',
        biografia:'Wolverine, cuyo nombre de nacimiento es James Howlett ​ es un superhéroe ficticio que aparece en los cómics estadounidenses publicado por Marvel Comics, principalmente en asociación con los X-Men.',
        foto: 'assets/wolverine.jpg',
        fecha: '1980'}
    ]
    constructor(){
        console.log("Servicio listo")
    }
    //obtener datos
    getHeroes(){
        return this.heroes;
    }
    //con esta obtenemos solo un heroe de la lista gracias al arreglo de heroe.component.ts
    getHeroe(id:number){
    return this.heroes[id];
    }
}

