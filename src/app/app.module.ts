import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { AdministrationComponent } from './administration/administration.component';
import { CompetenceComponent } from './competence/competence.component';
import { ConnectComponent } from './connect/connect.component';
import { DipforComponent } from './dipfor/dipfor.component';
import { InfogeneralComponent } from './infogeneral/infogeneral.component';
import { MenuconnectComponent } from './menuconnect/menuconnect.component';
import { UpdatestageComponent } from './updatestage/updatestage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageComponent } from './stage/stage.component';
import { HttpClientModule } from '@angular/common/http';
import { TypstageComponent } from './typstage/typstage.component';
import { AddtypeComponent } from './addtype/addtype.component';
import { UpdatetypeComponent } from './updatetype/updatetype.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AddStageComponent,
    AdministrationComponent,
    CompetenceComponent,
    ConnectComponent,
    DipforComponent,
    InfogeneralComponent,
    MenuconnectComponent,
    UpdatestageComponent,
    StageComponent,
    TypstageComponent,
    AddtypeComponent,
    UpdatetypeComponent,
    DashboardComponent,
  ],
  imports: [
   BrowserModule,
    AppRoutingModule , FormsModule , ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
