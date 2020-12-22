import { Component } from '@angular/core';
import {AuthenticationService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pinterest';
  constructor(public _auth : AuthenticationService) {
  }
}
