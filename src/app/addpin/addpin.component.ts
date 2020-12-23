import {Component, Input, OnInit} from '@angular/core';
import {PinService} from '../services/pin.service';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addpin',
  templateUrl: './addpin.component.html',
  styleUrls: ['./addpin.component.scss']
})
export class AddpinComponent implements OnInit {

  constructor(private pinService: PinService, private router: Router, private modalService: NgbModal) { }
  @Input() pinDetails = {id: '', pinner:'', img:'',title:'', about:'', link:''}
  ngOnInit(): void {
  }
  closeResult = '';
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  addPin(dataPin){
    this.pinService.createPin(this.pinDetails).subscribe((data:{})=>{
      this.router.navigate(['']);
      window.location.reload();
    })
  }
}
