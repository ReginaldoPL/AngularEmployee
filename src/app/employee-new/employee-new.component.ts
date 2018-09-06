import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  name = "";
  salary = 0;
  bonus = 0;


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(event) {
    const bonus = this.salary >= 1000? 0 : this.bonus;
    this.employeeService.employees.push({ name: this.name, salary: this.salary, bonus: this.bonus });
    console.log(this.employeeService.employees);
  }

}
