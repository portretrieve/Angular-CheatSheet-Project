import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: LifecycleComponent,
  },
  {
    path: 'life-parent',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MComponentLifecycleRoutingModule {}
