import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AdventureComponent } from './adventure';
import {RouterOutlet} from "@angular/router";
import {BookingComponent} from "./booking";
import {EntertainmentComponent} from "./entertainment";
import {FoodComponent} from "./food";
import {InformationComponent} from "./information";
import {LodgingComponent} from "./lodging";
import {MuseumComponent} from "./museum";
import {TransportationComponent} from "./transportation";

@NgModule({
  imports: [BrowserModule, RouterOutlet],
  declarations: [
    HomeComponent,
    AdventureComponent,
    BookingComponent,
    EntertainmentComponent,
    FoodComponent,
    InformationComponent,
    LodgingComponent,
    MuseumComponent,
    TransportationComponent
  ],
  bootstrap: []
})
export class AppModule { };
