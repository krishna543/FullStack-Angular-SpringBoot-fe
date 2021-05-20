import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //Since we are bringing post request, that means we are sending a new Employee so declare new Employee() as below
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      //calling to navigate to employees page directly
      this.goToEmployeeList();
    },
     error => console.log(error));
    
  }


  // So once we submit the new employee, we need to navigate to display employess list via router call
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSumbit() {
    console.log(this.employee)
    this.saveEmployee();
    
  }
}
