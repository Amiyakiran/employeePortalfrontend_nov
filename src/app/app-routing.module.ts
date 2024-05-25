import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:HomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'add',component:AddComponent},
  /* :id - to indicate that it is a parameter */
  {path:'edit/:id', component:EditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
