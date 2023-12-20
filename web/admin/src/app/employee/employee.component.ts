import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employee:Employee[]=[];

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.employeeService.Getemployees().subscribe(res=>{
      this.employee=res;
    })
  }

  // Delete Emp
  deleteEmp(id: any) {
    if (confirm("Are you sure to delete?")) {
      this.employeeService.Deleteemployee(id).subscribe(res => {
        if (res.status == 200) {
          for (let i = 0; i < this.employee.length; i++) {
            if (id == this.employee[i]._id) {
              this.employee.splice(i, 1);
              window.location.reload()
              break;
            }
          }
        }
      });
    }
  }

}
