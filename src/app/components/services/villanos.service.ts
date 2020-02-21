//sirven para extraer datos de varias paginas
import {Injectable} from '@angular/core';

@Injectable()
export class VillanosService{

    private villanos:any[]=
    [
        {nombre: 'Galactus',
        biografia:'Galactus es un personaje ficticio que aparece en las publicaciones de Marvel Comics, creado por los historietistas Stan Lee y Jack Kirby. Su primera aparición fue en marzo de 1966 en el número 48 de Fantastic Four.',
        foto: 'assets/galactus.jpg',
        fecha: '1990'},
        {nombre: 'Gosth Rider',
        biografia:'Ghost Rider es el nombre de muchos antihéroes que aparecen en los cómics estadounidenses publicados por Marvel Comics. Marvel había usado previamente el nombre en un personaje del oeste cuyo nombre más tarde se cambió a Jinete Fantasma.',
        foto: 'assets/pp.jpg',
        fecha: '1995'},
        {nombre: 'Venom',
        biografia:'Venom (llamado Veneno en muchas de las traducciones al español)​ es un personaje ficticio que aparece en los cómics estadounidenses',
        foto: 'assets/venom.jpg',
        fecha: '1980'}
    ]
    constructor(){
        console.log("Servicio listo")
    }
    //obtener datos
    getVillanos(){
        return this.villanos;
    }
    getVillano(id:number){
        return this.villanos[id];
        }

}

