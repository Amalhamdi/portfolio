import { Injectable } from '@angular/core';
import { typeStage } from '../model/typeStage.model';

@Injectable({
  providedIn: 'root'
})
export class TypestageService {
 tab_type  !: typeStage[];
 type !: typeStage;
 ajouterType(type: typeStage)
 {
     this.tab_type.push(type);
     console.log("Ajout avec succes : "+ type.nom);
 }
  supprimerType(type: typeStage){
    const index = this.tab_type.indexOf(type, 0);
    if (index > -1) {
    this.tab_type.splice(index, 1);
    }   
   }
    
   consulterType(id:number): typeStage
   {
     return this.tab_type.find(type => type.code == id)!;
   }
   modifierType(type : typeStage) 
   {
     this.supprimerType(type);
     this.ajouterType(type);
   }
  listType():typeStage[] {
    return this.tab_type;
    }
  constructor() { 
    this.tab_type = [
      {code: 1 ,nom:'Stage D initiation', obligation : "obligatoire" , paiement : "Non"},
      {code: 2 ,nom:'Stage De Perfectionnement', obligation : "obligatoire" , paiement : "Non"},
      {code: 3 ,nom:'Stage De Fin De Parcour ', obligation : "obligatoire" , paiement : "Oui"},
      {code: 4 ,nom:'Stage D été',obligation : "facultatif" , paiement : "Oui"},
    ];
  }
}
