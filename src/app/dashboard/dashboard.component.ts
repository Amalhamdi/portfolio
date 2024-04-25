import { Component, OnInit } from '@angular/core';
import { DipforService } from '../services/dipfor.service';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbstage = 0;
  nbdip = 0;
  nbfor=0;
  constructor(private stageService : StageService , private dipforService : DipforService) { 
    this.nbstage = this.stageService.calculNbstage();
    this.nbdip=this.dipforService.calculNbdip();
    this.nbfor=this.dipforService.calculNbfor();

  }
   
  ngOnInit(): void {
  }

}
