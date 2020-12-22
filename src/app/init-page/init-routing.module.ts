import {Component, NgModule, Type} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitialComponent} from './initial/initial.component';
import {AuthGuard} from '../guards/auth.guard';
import {HomePageComponent} from '../home-page/home-page.component';

const routes: Routes = [
  {path : '', component: InitialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitRoutingModule { }
export function getHomeComponent(): Type<Component> {

  if(AuthGuard.prototype.canActivate){

    return <Type<Component>>HomePageComponent;

  }else{

    return <Type<Component>>InitialComponent;

  }


}
