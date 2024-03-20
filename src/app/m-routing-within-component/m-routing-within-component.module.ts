import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MRoutingWithinComponentRoutingModule } from './m-routing-within-component-routing.module';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { MSharedCompsModule } from '../m-shared-comps/m-shared-comps.module';

@NgModule({
  declarations: [
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
  ],
  imports: [
    CommonModule,
    MRoutingWithinComponentRoutingModule,
    MSharedCompsModule,
  ],
})
export class MRoutingWithinComponentModule {}
