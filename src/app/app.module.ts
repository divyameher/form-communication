import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, EmployeeListComponent, EmployeeFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
