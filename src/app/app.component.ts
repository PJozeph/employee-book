import { Component } from '@angular/core';
import { DialogRole, MatDialog } from '@angular/material/dialog';
import { CreateEmployeeDialogComponent } from './components/create-employee-dialog/create-employee-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-book';

  constructor(private dialog : MatDialog) {}

  public onCreateEmployeeClick() {
    this.dialog.open(CreateEmployeeDialogComponent);
  }

}
