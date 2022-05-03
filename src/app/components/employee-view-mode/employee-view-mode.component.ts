import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-view-mode',
  templateUrl: './employee-view-mode.component.html',
  styleUrls: ['./employee-view-mode.component.scss']
})
export class EmployeeViewModeComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    
  }

}
