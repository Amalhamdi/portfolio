import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {
newStage = new Stage();
tab_type !: typeStage [];
 newType!: typeStage;
 newIdt !: number;
  constructor(private stService : StageService , private router : Router) { }
   addStage(){
    this.newType = this.stService.consulterType(this.newIdt);
    this.newStage.type = this.newType;
    this.stService.ajouterStage(this.newStage);
    this.router.navigate(['stage']);
   }
  ngOnInit(): void {
    this.tab_type = this.stService.listTypeStage();
  }

}