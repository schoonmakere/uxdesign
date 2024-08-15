import { Routes } from '@angular/router';
import {HomeComponent} from "./home";
import {AdventureComponent} from "./adventure";
import {BookingComponent} from "./booking";
import {EntertainmentComponent} from "./entertainment";
import {FoodComponent} from "./food";
import {InformationComponent} from "./information";
import {LodgingComponent} from "./lodging";
import {MuseumComponent} from "./museum";
import {TransportationComponent} from "./transportation";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adventure', component: AdventureComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'entertainment', component: EntertainmentComponent},
  {path: 'food', component: FoodComponent},
  {path: 'information', component: InformationComponent},
  {path: 'lodging', component: LodgingComponent},
  {path: 'museum', component: MuseumComponent},
  {path: 'transportation', component: TransportationComponent},


  //otherwise

  {path: '**', redirectTo: ''}
];
