import { Component, OnInit } from '@angular/core';
import { Stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';
import { AuthService } from '../services/auth.service';
import { StageService } from '../services/stage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
 tab_stage !: Stage[];
 tab_type !: typeStage[];
 stage !: Stage;
  constructor(private stageservice : StageService, public authServ : AuthService , 
    public userService : UserService) { 
 this.tab_stage = stageservice.listStage();
 this.tab_type = stageservice.listTypeStage();
  }
  suppStage(stage: Stage) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
 if (conf) {
 this.stageservice.supprimerStage(stage);
 console.log("Suppression avec succes :"+stage.lieu);
 }
 }
  ngOnInit(): void {
  }

}