import {Component} from '@angular/core'
@Component({
    selector: 'app-acercade',templateUrl:'acercade.component.html'

})
export class AcercadeComponent{
    mostrarIf:boolean=true;
    mostrarFor:boolean=true;
    frase={
        mensaje:'1.1. HISTORIA En el año de 1996, se estableció en la ciudad de San Juan del Río una extensión académica de la Universidad Tecnológica de Querétaro (la segunda universidad de mayor importancia con sede en la capital del estado, Santiago de Querétaro). Debido a la gran demanda de TSU por parte del sector industrial de San Juan del Río y sus alrededores, las autoridades de la extensión académica decidieron realizar un estudio de factibilidad para la creación de una nueva Universidad Tecnológica en la ciudad, resultando positivo el resultado de este estudio. ',
       
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
