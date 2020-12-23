import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pin-more',
  templateUrl: './pin-more.component.html',
  styleUrls: ['./pin-more.component.scss']
})
export class PinMoreComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id = this.route.snapshot.params.id;
  ngOnInit(): void {

  }

}
