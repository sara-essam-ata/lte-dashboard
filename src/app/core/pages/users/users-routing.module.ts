import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'',component:UsersListComponent},
  {path:'profile/:id',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
