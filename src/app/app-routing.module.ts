import {Component, NgModule, Type} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {InitialComponent} from './init-page/initial/initial.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export function getHomeComponent(): Type<Component> {

  if(AuthGuard.prototype.canActivate){

    return <Type<Component>>HomePageComponent;

  }else{

    return <Type<Component>>InitialComponent;

  }


}
