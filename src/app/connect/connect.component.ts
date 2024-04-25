import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { Compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
    users!: UserModel[]
    user = new Compte();
    erreur = false;
    userCourant! : string;
    isConnected : boolean = false;
    role! : string;
    constructor(private usersServ: UserService, private router: 
   Router) { }
   getUsers(): void {
     this.usersServ.getUsers().subscribe(items => this.users = items);
     }
     disconnect() {
     this.isConnected = false;
     this.userCourant = undefined!;
     this.router.navigate(['/']);
     }
     connect(user : Compte) : boolean {
     this.users.forEach((unUser) => {
     if(user.email == unUser.email && user.mot2pass ==unUser.name) {
     this.userCourant = unUser.name!;
     this.isConnected = true;
     }
     });
     return this.isConnected;
     }
     setUserCourant(u : string) {
     this.userCourant = u;
     this.isConnected = true;
     }
     connected(){
     let permission: boolean = this.connect(this.user); 
     console.log("Tentative de connexion :" + this.user.email);
     if (permission)
     this.router.navigate(['/stage']);
     else
     this.erreur=true;
     }
     reset() {
     this.erreur=false;
     }
     
     ngOnInit() {
     this.getUsers();
     }
  
    }
