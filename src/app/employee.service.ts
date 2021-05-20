import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseurl = "https://springboot-anglr-pgadmin-be.herokuapp.com//api/v1/employees"

  constructor(private httpClient:HttpClient) { }


  //creating a common method for getting list of all employees in service.

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseurl}`)
  }
  //Post request to send new employee information into db
  createEmployee(employee :Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseurl}`,employee);
  }

  //Get Employe details by Id - GET Request by Id
  getEmployeebyId(id:number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseurl}/${id}`);
  }

  updateEmployee(id:number,employee:Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseurl}/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

}
