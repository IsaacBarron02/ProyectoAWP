import {Component} from '@angular/core'
@Component({
    selector: 'app-otra',templateUrl:'otra.component.html'

})
export class OtraComponent{
    mostrarIf:boolean=true;
    mostrarFor:boolean=true;
    frase={
        mensaje:'En la actualidad, se observa cada día como en Mexico aumenta la delincuencia, los secuestros, los robos, mujeres en peligro y niños perdidos,  Mexico es un país con familias en peligro que día con día temen salir de sus hogares y ya no volver. ',
       
    }
    carreras:string[]=['1.-Diseño de botón de panico','2.-conexión por servidor rapberry','3.-recepcion de datos en estacion policiaca','4.-al precionar el boton se lograr obtener la localizacion de la persona']
    cambiarIf(mostrarIf:boolean){
        if (mostrarIf==true){
            this.mostrarIf=false;
        }
        else{
            this.mostrarIf=true;
        }
    
    }
    cambiarFor(mostrarFor:boolean){
        if(mostrarFor==true){
            this.mostrarFor=false;
        }
        else{
            this.mostrarFor=true;
        }
    }
}
