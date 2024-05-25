import { Component } from '@angular/core';
import { EmployeeModel } from '../employee.model';
import { ApiServiceService } from '../services/api-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
 
   employee:EmployeeModel={}

   constructor(private api:ApiServiceService, private router:Router){}

   //function to delete all details entered in the field.
   cancelEmployee(){
    this.employee={}
   }

   addEmployee(){
    console.log(this.employee);
       this.api.addEmployeeApi(this.employee).subscribe({
        next:(res:EmployeeModel)=>{
          console.log(res);
          Swal.fire({
            title:'Wow',
            text: `${this.employee.username} added successfully`,
            icon:"success"
          })
          this.router.navigateByUrl('employee')
          
        },
        error:(res:any)=>{
          console.log(res);
          
        }
       })
    
    
   }

}
