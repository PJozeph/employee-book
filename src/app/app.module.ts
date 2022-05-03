import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeListViewComponent } from './components/employee-list-view/employee-list-view.component';
import { EmployeeEditModeComponent } from './components/employee-edit-mode/employee-edit-mode.component';
import { EmployeeViewModeComponent } from './components/employee-view-mode/employee-view-mode.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from "@angular/material/dialog";
import { CreateEmployeeDialogComponent } from './components/create-employee-dialog/create-employee-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeListViewComponent,
    EmployeeEditModeComponent,
    EmployeeViewModeComponent,
    CreateEmployeeDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
