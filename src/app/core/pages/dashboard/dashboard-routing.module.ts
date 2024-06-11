import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
    children: [
      {
        path: '',redirectTo:'home',pathMatch:'full'
      },
      {
        path: 'home',component:HomeComponent
      },
      {
        path: 'projects',
        title: 'AdminLTE | Projects',
        loadChildren: () =>
          import('../projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
    ],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
