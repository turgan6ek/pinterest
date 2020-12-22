import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthenticationService, private _router: Router, private userService: UserService, private modalService: NgbModal) {
    if (this._auth.loggedIn) {
      this._router.navigate(['']);
    }
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

  User: any = [];
  username;
  password;

  login(): void {
    if (this.username != '' && this.password != '') {
      if (this._auth.login(this.username, this.password)) {
        this._router.navigate([""]);
        window.location.reload();
      }
      else
        alert("Wrong username or password");
    }
  }
  loadUsers(){
    return this.userService.getUsers().subscribe(data => this.User = data);
  }
  ngOnInit(): void {
    this.loadUsers();
  }
}
