import { Component, OnInit } from '@angular/core';
import {PinService} from '../services/pin.service';
import {Pin} from '../services/Pin.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private pinService: PinService) { }
  Pin = this.pinService.getPins().subscribe(data => this.Pin = data)
  ngOnInit(): void {
  }

}
