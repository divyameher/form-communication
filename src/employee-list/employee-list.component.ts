import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  @Input() employees: any;
  @Output() clickedEmployee = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onEdit(emp: any) {
    console.log('employee:', emp);
    this.clickedEmployee.emit(emp);
  }
}
