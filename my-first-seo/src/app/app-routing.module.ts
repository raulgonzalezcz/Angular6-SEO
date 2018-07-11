import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//adding User module
import { UsersComponent } from './users/users.component';

//updating routes: single path "/users"
const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
