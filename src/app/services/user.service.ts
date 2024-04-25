import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from 
'@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { Compte } from '../model/compte.model';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  })
 }
@Injectable({
  providedIn: 'root'
})
export class UserService {
  role! : string;
  private usersUrl: string = 
  'https://my-json-server.typicode.com/Amalhamdi/utilisateur/util';
  constructor(private http: HttpClient, private router: Router) { }
  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersUrl) }
}
