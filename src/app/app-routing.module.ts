import {RouterModule,Routes } from '@angular/router';
import {AcercadeComponent} from './components/acercade/acercade.component';
import {BodyComponent} from './components/body/body.component';
import {OtraComponent}from './components/otra/otra.component';
import {IntegrantesComponent}from './components/integrantes/integrantes.component';
import {HeroesComponent}from './components/heroes/heroes.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import {VillanoComponent} from './components/villano/villano.component';
//los que estan aqui dados de alta es para que esten en la barra de menu
const APP_ROUTES: Routes = [
  {path: 'body', component:BodyComponent},
  {path: 'acercade', component:AcercadeComponent},
  {path: 'otra', component:OtraComponent},
  {path: 'integrantes',component:IntegrantesComponent},
  {path: 'heroes',component:HeroesComponent},
  {path: 'villanos',component:VillanosComponent},
  {path: 'heroe/:id',component:HeroeComponent},
  {path: 'villano/:id',component:VillanoComponent},
  //aqui declaramos la primera donde iniciara siempre

  {path: '**',pathMatch:'full', redirectTo:'body'}
  //aqui dec claramos las paginas donde enviaremos informacion de HEROES-VILLANOS
  //ademas se declara el id para el index con /:id
  
  

];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES)
