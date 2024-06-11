import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AddEditViewProjectComponent } from './components/add-edit-view-project/add-edit-view-project.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProjectsListComponent, AddEditViewProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
