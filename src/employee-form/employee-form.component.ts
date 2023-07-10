import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  @Input() selectedEmployee: any;
  empForm: FormGroup = this.fb.group({
    empName: [''],
    dName: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  ngDoCheck() {
    if (this.selectedEmployee) {
      this.empForm.setValue({
        empName: this.selectedEmployee.name,
        dName: this.selectedEmployee.departmentName,
      });
    }
  }
  onSubmit() {
    console.log('Form data:', this.empForm.value);
  }
}
