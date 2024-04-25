import { Component, OnInit } from '@angular/core';
import { Associat, Infogen, Interet } from '../model/info';

@Component({
  selector: 'app-infogeneral',
  templateUrl: './infogeneral.component.html',
  styleUrls: ['./infogeneral.component.css']
})
export class InfogeneralComponent implements OnInit {
info!: Infogen[];
hobbies!: Interet[];
clubs!: Associat[];
  constructor() { 
    this.info = [
      {
      nom:'Amal',
      prenom:'Hamdi',
      dateN: new Date ("07/23/2002"),
      email:'hamdyamal10@gmail.com',
      tel:55109243
     }
     ];

    this.hobbies = [
      { hobby : 'Lecture'},
      { hobby : 'Ecriture'},
      { hobby : 'Natation'},
      { hobby : 'Ecouter la musique'},
      { hobby : 'Regarder les films'}
    ];
    this.clubs = [
      {vieassociat:'Membre GDSC ISET NABEUL'},
      {vieassociat:'Membre IEEE ISET NABEUL'},
      {vieassociat:'Ex membre TUNIVISION ISET NABEUL'},
      {vieassociat:'Membre ISIE'},
      {vieassociat:'Membre DEBATERS CLUB BECHIR-SFAR'},
    ]
  }

  ngOnInit(): void {
  }

}