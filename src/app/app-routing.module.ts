import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStageComponent } from './add-stage/add-stage.component';
import { AddtypeComponent } from './addtype/addtype.component';
import { AdministrationComponent } from './administration/administration.component';
import { CompetenceComponent } from './competence/competence.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DipforComponent } from './dipfor/dipfor.component';
import { InfogeneralComponent } from './infogeneral/infogeneral.component';
import { StageComponent } from './stage/stage.component';
import { TypstageComponent } from './typstage/typstage.component';
import { UpdatestageComponent } from './updatestage/updatestage.component';
import { UpdatetypeComponent } from './updatetype/updatetype.component';

const routes: Routes = [
  {path: "competence", component : CompetenceComponent},
  {path: "info", component : InfogeneralComponent},
  {path: "dipfor", component : DipforComponent},
 {path: "admin", component :AdministrationComponent},
  {path: "stage", component : StageComponent},
  {path: "updatestage/:id", component : UpdatestageComponent},
  {path: "addstage", component : AddStageComponent},
  {path: "typestage", component : TypstageComponent},
  {path: "addtype", component : AddtypeComponent},
  {path: "updatetype/:id", component : UpdatetypeComponent},
   {path: "dashboard", component: DashboardComponent},
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
