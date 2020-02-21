import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//estas son las rutas
import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';

//agregamos este import para lograr enlazar app con header*/
import{HeaderComponent} from './components/header/header.component';
import{BodyComponent} from './components/body/body.component';
import{FooterComponent} from './components/footer/footer.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { OtraComponent } from './components/otra/otra.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import {HeroesComponent}from './components/heroes/heroes.component';
import {VillanosComponent} from './components/villanos/villanos.component';
//aqui es donde importamos a donde mandamos la informacion de cada HEROES-VILLANOS
import {HeroeComponent}from './components/heroe/heroe.component';
import {VillanoComponent} from './components/villano/villano.component';
//servicio
import { HeroesService } from './components/services/heroes.service';
import { VillanosService } from './components/services/villanos.service';
//*************************************************************************** */
@NgModule({
  //agregamos el nombre de la clase despues de app component ponemos coma , HeaderComponent
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AcercadeComponent,
    OtraComponent,
    IntegrantesComponent,
    HeroesComponent,
    VillanosComponent,
    HeroeComponent,
    VillanoComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  //servicio
  providers: [  HeroesService,VillanosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
