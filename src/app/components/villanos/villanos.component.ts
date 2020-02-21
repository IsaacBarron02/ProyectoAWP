import { Component,OnInit } from '@angular/core';
import { VillanosService } from '../services/villanos.service';



@Component({
    selector: 'app-villanos',
    templateUrl: 'villanos.component.html'
})

export class VillanosComponent implements OnInit{
    villanos:any []=[];
    //traemos service
    constructor(private villanosService:VillanosService){
        
    }
    ngOnInit(){
        //como los datos estan llegando en heroes service heroes service ahora es un atributo
        this.villanos=this.villanosService.getVillanos();
    }
}
    