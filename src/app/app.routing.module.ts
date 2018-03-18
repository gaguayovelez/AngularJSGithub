import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/users',
  pathMatch: 'full'
}, {
  path: 'users',
  component: UsersComponent
}, {
  path: 'users/:username',
  component: ReposComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
