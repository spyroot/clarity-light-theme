import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { ChildComponent } from './child/child.component';
import { HomeRoutingModule } from './home.routing';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import { ClarityModule } from '@clr/angular';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
     ClarityModule
  ],
  declarations: [ChildComponent, HomeComponent, Child2Component, Child3Component]
})
export class HomeModule { }