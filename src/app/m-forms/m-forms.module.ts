import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MFormsRoutingModule } from './m-forms-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { MSharedCompsModule } from '../m-shared-comps/m-shared-comps.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveComponent, TemplateDrivenComponent],
  imports: [CommonModule, MFormsRoutingModule, MSharedCompsModule, FormsModule],
})
export class MFormsModule {}
