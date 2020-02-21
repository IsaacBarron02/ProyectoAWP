import {Component} from '@angular/core'
@Component({
    selector: 'app-body',templateUrl:'body.component.html'

})
export class BodyComponent{
    mostrarIf:boolean=true;
    mostrarFor:boolean=true;
    frase={
        mensaje:'El botón de panico se desarrollo debido a la gran demanda de acuerdo a la problematica que existe en mexico referente a secuestros, este dispositivo sera implementado en un llavero, pulseradije o incluso en pendientes para su facil uso y implementación',
        carrera:'Tecnologicas de la informacion'
    }
    carreras:string[]=['TI','Mecatronica','Qumica','Negocios']
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