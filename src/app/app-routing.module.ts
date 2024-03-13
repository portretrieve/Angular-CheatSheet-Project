import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'bind',
    loadChildren: () =>
      import(
        './m-directives-bindings-pipes/m-directives-bindings-pipes.module'
      ).then((module) => module.MDirectivesBindingsPipesModule),
  },
  {
    path: 'parent-child',
    loadChildren: () =>
      import(
        './m-view-child-ren-content-child-ren/m-view-child-ren-content-child-ren.module'
      ).then((module) => module.MViewChildRenContentChildRenModule),
  },
  {
    path: 'parent-child-data-transfer',
    loadChildren: () =>
      import(
        './m-input-output-data-transfer/m-input-output-data-transfer.module'
      ).then((module) => module.MInputOutputDataTransferModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
