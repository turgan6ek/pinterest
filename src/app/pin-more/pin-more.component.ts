import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PinService} from '../services/pin.service';

@Component({
  selector: 'app-pin-more',
  templateUrl: './pin-more.component.html',
  styleUrls: ['./pin-more.component.scss']
})
export class PinMoreComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pinService: PinService) { }
  id = this.route.snapshot.params.id;
  pinData: any = {}
  ngOnInit(): void {
    this.pinService.getPin(this.id).subscribe(data=> this.pinData = data)
  }

}
