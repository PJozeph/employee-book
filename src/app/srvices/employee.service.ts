import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Employee {
  imageUrl: string,
  firstName: string,
  lastName: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees : Employee [] = [ 
    {imageUrl : '', firstName : 'Jozsef', lastName : 'Pallagi'},
    {imageUrl : '', firstName : 'Emese', lastName : 'Kovács'},
    {imageUrl : '', firstName : 'Nagy', lastName : 'Anna'},
    {imageUrl : '', firstName : 'Jozsef', lastName : 'Pallagi'},
    {imageUrl : '', firstName : 'Emese', lastName : 'Kovács'},
    {imageUrl : '', firstName : 'Nagy', lastName : 'Anna'} ]

  private employeesSubject$ = new BehaviorSubject<Employee []>(this.employees);

  constructor() { }

  public getEmployees(): Observable<Employee []> {
    return this.employeesSubject$;
  }

}
