import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

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
  },{
    path:'employee',component:EmployeeComponent
  },{
    path:'createEmployee',component:EmployeeCreateComponent
  },{
    path:'editEmployee/:id',component:EmployeeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
