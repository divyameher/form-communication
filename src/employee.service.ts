import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return of([
      { name: 'Divya', departmentName: 'R&D' },
      { name: 'Renuka', departmentName: 'Development' },
      { name: 'Bhanu', departmentName: 'Devops' },
    ]);
  }
}
