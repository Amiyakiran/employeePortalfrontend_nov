import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../employee.model';
import { ApiServiceService } from '../services/api-service.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import Swal from 'sweetalert2';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   
  allEmployee:EmployeeModel[]=[]
  adminLoginTime:any =new Date
  searchKey:string=""
  p: number = 1;

  constructor(private api:ApiServiceService){}

  //TO GET DATA WHEN THE PAGE LOADS...
  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmployee = res   
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  sortId(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }

  //localeCompare() - method to compare two string
  // return  -1, 1, 0 (for before , after ,equal)
  //syntax
  //string.localeCompare(compareString)

  sortName(){
    this.allEmployee.sort((a:any,b:any)=>a.username.localeCompare(b.username))
  }

  //method to generate pdf

  generatePdf(){
    //create an object for jsPDF class
    const pdf = new jsPDF()

    let  head =[['Employee Id','Employee name','Email','Status']]

    let body :any = []

    /* since we have data from backend and the body should be nested array */
    this.allEmployee.forEach(item=>{
      body.push([item.id, item.username,item.email, item.status])
    })
   //to set a font size to the table
    pdf.setFontSize(16)
     //heading
     pdf.text('Employee Details',10,10)
    //generate table
    autoTable(pdf,{head,body})
    //to open this table in new tab
    pdf.output('dataurlnewwindow')
    //name of the pdf file
    pdf.save('EmployeeTable.pdf')
  }

  //method to delete employee details

  deleteEmployee(id:any){
    this.api.deleteEmployeeApi(id).subscribe({
      next:(res:any)=>{console.log(res);
        this.getAllEmployee()
      },
      error:(err:any)=>{console.log(err);
      }
    })
  }


}
