import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';
import { AuthService } from '../services/auth.service';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-updatestage',
  templateUrl: './updatestage.component.html',
  styleUrls: ['./updatestage.component.css']
})
export class UpdatestageComponent implements OnInit {
  stageCourant = new Stage();
  tab_type! : typeStage[];
  idtModifie ! : any;
  constructor(private activatedRoute: ActivatedRoute, 
      private router :Router, private stService: StageService , public authServ : AuthService) {}
    modifStage()
    { 
      this.stageCourant.type = this.stService.consulterType(this.idtModifie);
      this.stService.modifierStage(this.stageCourant);
       console.log("stage modifié avec succes : "+ 
      this.stageCourant.acceuil+":"+this.stageCourant.lieu+" "+ 
      this.stageCourant.type+", ajoutée le "+this.stageCourant.date);
      this.router.navigate(['stage']);
    }
  ngOnInit(): void {
    this.tab_type = this.stService.listTypeStage();
    this.stageCourant = this.stService.consulterStage 
    (this.activatedRoute.snapshot.params['id']);
    console.log("Code stage à modifier "+this.stageCourant.num!);
    this.idtModifie = this.stageCourant.type?.code;
  }
}