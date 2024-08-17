import { Component } from '@angular/core';
import { NgOptimizedImage} from "@angular/common";
import {BookingComponent} from "../booking";
import {RouterModule} from "@angular/router";

@Component({ standalone:true,
  imports: [RouterModule],
  templateUrl: 'home.component.html'})
export class HomeComponent {
}

