import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home';
import { AdventureComponent } from './adventure';
import {BookingComponent} from "./booking";
import {EntertainmentComponent} from "./entertainment";
import {FoodComponent} from "./food";
import {InformationComponent} from "./information";
import {LodgingComponent} from "./lodging";
import {MuseumComponent} from "./museum";
import {TransportationComponent} from "./transportation";
import { NgOptimizedImage} from "@angular/common";
import { routes } from'./app.routes';

@NgModule({
  imports: [RouterModule, BrowserModule, NgOptimizedImage],
  declarations: [
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
