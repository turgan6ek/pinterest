import {Pin} from './Pin.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PinService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  id = 0;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getPins():Observable<Pin>{
    return this.http.get<Pin>(this.apiUrl +'/pins');
  }
  createPin(pins): Observable<Pin>{
    return this.http.post<Pin>(this.apiUrl+'/pins', JSON.stringify(pins),this.httpOptions);
  }
  getPin(id):Observable<Pin>{
    return this.http.get<Pin>(this.apiUrl + '/pins/' + id)
  }

}
