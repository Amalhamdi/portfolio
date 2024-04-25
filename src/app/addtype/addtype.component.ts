import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { typeStage } from '../model/typeStage.model';
import { TypestageService } from '../services/typestage.service';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.css']
})
export class AddtypeComponent implements OnInit {
  tab_type !: typeStage [];
  newType = new typeStage;
  constructor(private typeService : TypestageService , private router : Router) { }
  addtype(){

    this.typeService.ajouterType(this.newType);
    this.router.navigate(['typestage']);

   }
  ngOnInit(): void {
    this.tab_type = this.typeService.listType();
  }
}
