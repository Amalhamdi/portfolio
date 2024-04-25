import { Injectable } from '@angular/core';
import { diplome, formation } from '../model/dipfor';

@Injectable({
  providedIn: 'root'
})
export class DipforService {
  diplomes!: diplome [];
  formations!: formation[];
  constructor() {
    this.diplomes = [
      {id : 1 , 
        nom : "baccalaureat" ,
         dateD: new Date ("09/02/2021"),
         lieu : 'Lycée Bechir Sfar' }
    ];
   
   this.formations = [
    {id : 1,
       nom : "formation en HTML/CSS",
        dateF : new Date("09/11/2021") ,
         lieu : 'Coursera'},

    {id : 2,
       nom : "formation en Java Script",
        dateF : new Date("05/23/2021") ,
         lieu : 'Coursera'},

    {id : 3,
       nom : "formation en Intelligence emotionelle",
        dateF : new Date("08/02/2022"),
         lieu :'Udemy'},
   ]
   }
   listDiplome():diplome[] {
    return this.diplomes;
    }

    listFormation():formation[] {
      return this.formations;
      }
      calculNbdip(): number{ 
        return this.diplomes.length;
       } 
      
       calculNbfor(): number{
        return this.formations.length;
       }
}

