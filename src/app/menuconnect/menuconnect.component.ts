import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menuconnect',
  templateUrl: './menuconnect.component.html',
  styleUrls: ['./menuconnect.component.css']
})
export class MenuconnectComponent implements OnInit {

  constructor(public authServ : AuthService) { }

  ngOnInit(): void {
  }

}