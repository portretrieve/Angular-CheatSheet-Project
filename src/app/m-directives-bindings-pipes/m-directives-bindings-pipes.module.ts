import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDirectivesBindingsPipesRoutingModule } from './m-directives-bindings-pipes-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ConvertPipe } from './convert.pipe';
import { ClassDirective } from './class.directive';
import { MSharedCompsModule } from '../m-shared-comps/m-shared-comps.module';
import { FormsModule } from '@angular/forms';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';

// From Shared Components Module

@NgModule({
  declarations: [
    PipesComponent,
    DirectivesComponent,
    BindingsComponent,
    ConvertPipe,
    ClassDirective,
    TempRefVarComponent,
  ],
  imports: [
    CommonModule,
    MDirectivesBindingsPipesRoutingModule,
    MSharedCompsModule,
    FormsModule,
  ],
})
export class MDirectivesBindingsPipesModule {}
