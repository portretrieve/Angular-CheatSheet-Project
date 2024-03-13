import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';

const routes: Routes = [
  {
    path: '',
    component: BindingsComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'temp',
    component: TempRefVarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MDirectivesBindingsPipesRoutingModule {}
