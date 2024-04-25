import { Injectable } from '@angular/core';
import { Stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  stage !: Stage;
  tab_stage !: Stage[];
  tab_type !: typeStage[];

 ajouterStage(stage: Stage)
 {
     this.tab_stage.push(stage);
     console.log("Ajout avec succes : "+ stage.lieu);
 }
  supprimerStage(stage: Stage){
    const index = this.tab_stage.indexOf(stage, 0);
    if (index > -1) {
    this.tab_stage.splice(index, 1);
    }   
   }
    
   consulterStage(id:number): Stage
   {
     return this.tab_stage.find(stage => stage.num == id)!;
   }
   modifierStage(stage : Stage) 
   {
     this.supprimerStage(stage);
     this.ajouterStage(stage);
   }
  listStage():Stage[] {
    return this.tab_stage;
    }

  constructor() { 
    this.tab_type = [
      {code: 1 ,nom:'Stage D initiation', obligation : "obligatoire" , paiement : "non"},
      {code: 2 ,nom:'Stage De Perfectionnement', obligation : "obligatoire" , paiement : "non"},
      {code: 3 ,nom:'PFE', obligation : "obligatoire" , paiement : "non"},
      {code: 4 ,nom:'Stage D éte',obligation : "facultatif" , paiement : "oui"},
    ];
    this.tab_stage = [
      {  num : 1 ,
         date : new Date('11/25/2021'),
         acceuil : 'Tunisie Telecom',
         lieu : 'Beja' , 
         type :{code : 1 , nom : 'Stage D initiation ' , obligation : "obligatoire" , paiement : "non"},
        },
    ];
  }
  
    listTypeStage():typeStage[] {
      return this.tab_type;
      }
      consulterType(id:number): typeStage{ 
        return this.tab_type.find(cat => cat.code == id)!;
       }
       calculNbstage(): number{ 
        return this.tab_stage.length;
       }
}
