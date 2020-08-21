import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent} from './home.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

const routes: Routes = [
    { 
      path: '', 
      component: HomeComponent,
      children: [
        {
          path: 'child-link1',
          component: ChildComponent
        },
        {
          path: 'child-link2',
          component: Child2Component
        },
        {
          path: 'child-link3',
          component: Child3Component
        }
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}