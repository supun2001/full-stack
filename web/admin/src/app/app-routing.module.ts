import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';

const routes: Routes = [
  {
    path:'',component:UsersComponent,
  },{
    path:'create',component:UserCreateComponent,
  },{
    path:'edit/:id',component:UserCreateComponent
  },{
    path:'phone',component:PhoneComponent
  },{
    path:'createPhone',component:PhoneCreateComponent
  },{
    path:'editPhone/:id',component:PhoneCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
