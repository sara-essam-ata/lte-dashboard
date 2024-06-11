import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AddEditViewProjectComponent } from './components/add-edit-view-project/add-edit-view-project.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    AddEditViewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
