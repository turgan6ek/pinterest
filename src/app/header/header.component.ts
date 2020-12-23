import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth : AuthenticationService) {
  }

  ngOnInit(): void {
  }
  username = localStorage.getItem("username");
}
