import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PinService} from '../services/pin.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-pin-more',
  templateUrl: './pin-more.component.html',
  styleUrls: ['./pin-more.component.scss']
})
export class PinMoreComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pinService: PinService, private userService: UserService) { }

  id = this.route.snapshot.params.id;
  pinData: any = {}
  userid  = this.pinService.getPin(this.id).subscribe(data => this.pinData.pinner);
  userData: any = {};
  ngOnInit(): void {

    this.pinService.getPin(this.id).subscribe(data=> this.pinData = data)
    this.userid = this.pinData.pinner;
    console.log(this.userid)
    this.userService.getUser(this.userid).subscribe(data=>this.userData = data)
  }
}
