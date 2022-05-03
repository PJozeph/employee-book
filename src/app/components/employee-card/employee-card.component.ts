import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/srvices/employee.service';
import { CreateEmployeeDialogComponent } from '../create-employee-dialog/create-employee-dialog.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onCardClick() {
    this.router.navigate(['employee/' + this.employee.firstName])
  }

  
}
