import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor(private authServ : AuthService, private router: Router) { }
  user = new Compte();
  erreur = false;
  connected(){
    let permission: boolean = this.authServ.connect(this.user); 
    console.log("Tentative de connexion :" + this.user.email);
    if (permission)
    this.router.navigate(['/stage']);
    else
    this.erreur=true;
    }
    reset() {
      this.erreur=false;
      }
  ngOnInit(): void {
  }

}
