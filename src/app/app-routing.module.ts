import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { routeGaurdGuard } from './Gaurds/route-gaurd.guard';
import { Observable } from 'rxjs';
import { LearnObservableComponent } from './learn-observable/learn-observable.component';

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
    path: 'obs',
    component: LearnObservableComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [routeGaurdGuard],
  },

  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [routeGaurdGuard],
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
    path: 'lifecycle',
    loadChildren: () =>
      import('./m-component-lifecycle/m-component-lifecycle.module').then(
        (module) => module.MComponentLifecycleModule
      ),
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
