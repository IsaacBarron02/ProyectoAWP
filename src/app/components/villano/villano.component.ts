import {Component} from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import { VillanosService } from '../services/villanos.service';
import {from}from 'rxjs';

@Component({
    selector: 'app-villano',
    templateUrl: 'villano.component.html'
})

export class VillanoComponent{
villano: any={}
constructor(private activatedRoute:ActivatedRoute,private villanosService:VillanosService){
    //
    activatedRoute.params.subscribe(params=>{
        params["id"];
        this.villano=villanosService.getVillano(params["id"]);
    })

}
}