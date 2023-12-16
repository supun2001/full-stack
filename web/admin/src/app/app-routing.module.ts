import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path:'',component:UsersComponent,
  },{
    path:'create',component:UserCreateComponent,
  },{
    path:'edit/:id',component:UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
