import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { typeStage } from '../model/typeStage.model';
import { AuthService } from '../services/auth.service';
import { TypestageService } from '../services/typestage.service';

@Component({
  selector: 'app-updatetype',
  templateUrl: './updatetype.component.html',
  styleUrls: ['./updatetype.component.css']
})
export class UpdatetypeComponent implements OnInit {
  typeCourant = new typeStage();
  tab_type! : typeStage[];
  constructor( private router :Router,
    private activatedRoute: ActivatedRoute,
     private typeService : TypestageService, 
     public authServ : AuthService) { }
     modifType()
     {   this.typeService.modifierType(this.typeCourant);
         console.log("Type modifié avec succes : "+ 
        this.typeCourant.nom);
        this.router.navigate(['typestage']);
        }

  ngOnInit(): void {
    this.tab_type = this.typeService.listType();
    this.typeCourant = this.typeService.consulterType 
    (this.activatedRoute.snapshot.params['id']);
    console.log("Code stage à modifier "+this.typeCourant.code!);
  }

}
