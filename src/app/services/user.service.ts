import { Injectable } from '@angular/core';
import {User} from './User.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pin} from './Pin.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  id = 0;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getUsers():Observable<User>{
    return this.http.get<User>(this.apiUrl +'/users');
  }
  createUser(user): Observable<User>{
    return this.http.post<User>(this.apiUrl+'/users', JSON.stringify(user),this.httpOptions);
  }
  getUser(id):Observable<User>{
    return this.http.get<User>(this.apiUrl + '/users/' + id)
  }
  savePin(id,user,pinid):Observable<User>{
    return this.http.put<User>(this.apiUrl + '/users/'+id,
    JSON.stringify(user),this.httpOptions);

  }
}
