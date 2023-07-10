import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employees: any;
  selectedEmployee: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeeList();
  }
  getEmployeeList() {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = response;
    });
  }
  onEditCLicked(employee: any) {
    console.log('employee in app component:', employee);
    this.selectedEmployee = employee;
  }
}
