import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //Set up the URL

  private url: string;

  constructor(private http: HttpClient) {
    let l = window.location;
    let host:string;
    //Are we running under Ionic or in a production environment?
    if(l.port >= '8100'){
      host = 'localhost:3000';
    }else{
      host = l.hostname + ((l.port.length>0)?':' + l.port:'');
    }

    this.url = `${l.protocol}//${host}/api/users/`;
  }

  getUsers(): Observable<User>{
    return this.http.get<User>(this.url, httpOptions);
  }

} 
