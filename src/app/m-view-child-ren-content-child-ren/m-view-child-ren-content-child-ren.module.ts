import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MViewChildRenContentChildRenRoutingModule } from './m-view-child-ren-content-child-ren-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MSharedCompsModule } from '../m-shared-comps/m-shared-comps.module';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    MViewChildRenContentChildRenRoutingModule,
    MSharedCompsModule,
  ],
})
export class MViewChildRenContentChildRenModule {}
