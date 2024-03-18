import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MComponentLifecycleRoutingModule } from './m-component-lifecycle-routing.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MSharedCompsModule } from '../m-shared-comps/m-shared-comps.module';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [LifecycleComponent, ParentComponent],
  imports: [CommonModule, MComponentLifecycleRoutingModule, MSharedCompsModule],
})
export class MComponentLifecycleModule {}
