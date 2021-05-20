import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:Employee = new Employee();

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute
    ,private router:Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeebyId(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.error(error));
    

  }

  onSumbit() {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data => {
      this.goToEmployeeList();
    },
    error => console.error(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
