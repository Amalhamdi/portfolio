import { Component, OnInit } from '@angular/core';
import { typeStage } from '../model/typeStage.model';
import { AuthService } from '../services/auth.service';
import { TypestageService } from '../services/typestage.service';

@Component({
  selector: 'app-typstage',
  templateUrl: './typstage.component.html',
  styleUrls: ['./typstage.component.css']
})
export class TypstageComponent implements OnInit {
  tab_type  !: typeStage[];
  type !: typeStage;
  oblStyle = {'color':'red'};
  noblStyle = {'color':'#32de84'};
  constructor(private typeservice : TypestageService ,  public authServ : AuthService) { 
    this.tab_type = typeservice.listType();
  }
  suppType(type: typeStage) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
 if (conf) {
 this.typeservice.supprimerType(type);
 console.log("Suppression avec succes :"+type.nom);
 }
 }

  ngOnInit(): void {
  }

}
