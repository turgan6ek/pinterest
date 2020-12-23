import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, getHomeComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {InitPageModule} from './init-page/init-page.module';
import {AuthGuard} from './guards/auth.guard';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {AuthenticationService} from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FollowingComponent } from './following/following.component';
import { PinComponent } from './pin/pin.component';
import {PinService} from './services/pin.service';
import { PinMoreComponent } from './pin-more/pin-more.component';

const routes = [
  {path: '', component: getHomeComponent(), canActivate:[AuthGuard]},
  {path: 'following', component: FollowingComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfilePageComponent, canActivate:[AuthGuard]},
  {path: 'pin/:id', component: PinMoreComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ProfilePageComponent,
    FollowingComponent,
    PinComponent,
    PinMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitPageModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule
  ],
  providers: [UserService, AuthenticationService,PinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
