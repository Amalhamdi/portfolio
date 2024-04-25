import { Component, OnInit } from '@angular/core';
import { diplome, formation } from '../model/dipfor';
import { DipforService } from '../services/dipfor.service';

@Component({
  selector: 'app-dipfor',
  templateUrl: './dipfor.component.html',
  styleUrls: ['./dipfor.component.css']
})
export class DipforComponent implements OnInit {
  diplomes!: diplome[];
  formations!: formation[];
  constructor(private dipforService : DipforService) {
  this.diplomes = dipforService.listDiplome();
  this.formations = dipforService.listFormation();
}
  ngOnInit(): void {
  }

}