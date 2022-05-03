import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditModeComponent } from './components/employee-edit-mode/employee-edit-mode.component';
import { EmployeeViewModeComponent } from './components/employee-view-mode/employee-view-mode.component';

const routes: Routes = [
  { path: 'employee/:id', component: EmployeeViewModeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
