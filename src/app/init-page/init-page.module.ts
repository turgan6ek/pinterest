import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from './initial/initial.component';
import {InitialHeaderComponent} from './initial-header/initial-header.component';
import { FooterComponent } from './footer/footer.component';
import {InitRoutingModule} from './init-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [InitialComponent,InitialHeaderComponent, FooterComponent, LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        InitRoutingModule,
        NgbDatepickerModule
    ],
  exports: [
    InitialComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class InitPageModule { }
