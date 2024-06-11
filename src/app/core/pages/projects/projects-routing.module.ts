import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AddEditViewProjectComponent } from './components/add-edit-view-project/add-edit-view-project.component';

const routes: Routes = [
  {path:'',component:ProjectsListComponent},
  {path:'add',component:AddEditViewProjectComponent},
  {path:'edit/:id',component:AddEditViewProjectComponent},
  {path:'view/:id',component:AddEditViewProjectComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
