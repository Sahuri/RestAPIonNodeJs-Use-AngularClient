
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';

const appRoutes:Routes = [
  {
      path: '',
      redirectTo: '../login',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent
  },];
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes, {useHash: true}),
    ],
    declarations: [],
    exports: [RouterModule]
  })
export class AppRouteModule { }