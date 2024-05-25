import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  serverUrl = 'https://employeeportal-nov.onrender.com'

  constructor(private http:HttpClient) { }

  loginApi(){/* it return observable */
    return this.http.get(`${this.serverUrl}/Employees/1`)
  }

  //api to add an employee
  addEmployeeApi(employee:EmployeeModel){
    return this.http.post(`${this.serverUrl}/Employees`,employee)
  }

  //api to get all employee
  getAllEmployeeApi(){
    return this.http.get(`${this.serverUrl}/Employees`)
  }

  //api to delete an employee

  deleteEmployeeApi(id:any){
    return this.http.delete(`${this.serverUrl}/Employees/${id}`)

  }

  //api to get a details of a particular employee

  getAEmployeeApi(id:any){
    return  this.http.get(`${this.serverUrl}/Employees/${id}`)
  }

  //API TO UPDATE A PARTICULAR EMPLOYEE

  updateEmployeeDetailsApi(id:any,body:any){
     return this.http.put(`${this.serverUrl}/Employees/${id}`,body)
  }

  //api to update admin details
  updateAdminApi(body:any){
    return  this.http.put(`${this.serverUrl}/Employees/1`,body)
  }

}
