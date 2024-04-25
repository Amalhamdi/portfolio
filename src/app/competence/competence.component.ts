import { Component, OnInit } from '@angular/core';
import { Competence, CompetenceTech, Frame, Language, Mod } from '../model/competence';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  comp!: Competence[];
  compt!: CompetenceTech[];
  langp!: Language[];
  model!:Mod[];
  framework!:Frame[];
  constructor() { 
this.comp = [
  {langue:'Arabe'},
  {langue:'Français'},
  {langue:'Anglais'},
  {langue:'Allemand'}
];
this.compt = [
  {logiciel:'Visual Studio Code'},
  {logiciel:'Sublime'},
]
this.langp = [
  {languageP:'Java'},
  {languageP:'C++'},
  {languageP:'Python'},
]
this.model = [
  {modelisation:'UML'}
]
this.framework = [
  {framework:'Bootstrap'},
  {framework:'Django'}
]
}
  ngOnInit(): void {
   
  }

}
