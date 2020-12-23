import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal, public userService: UserService, public router: Router, private auth:AuthenticationService) {}

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
  @Input() userDetails = { id: '',first_name :'', last_name:'', email:'', password:'',age: '',subscribed:[],saved:[]}

  addUser(dataUser){
    this.userService.createUser(this.userDetails).subscribe((data:{})=>{
      this.auth.login(this.userDetails.email,this.userDetails.password);
      window.location.reload();
    })
  }
  ngOnInit(): void {
  }
}
