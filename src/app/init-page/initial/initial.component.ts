import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const numb = window.scrollY;
    if (numb >= 100){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
}
