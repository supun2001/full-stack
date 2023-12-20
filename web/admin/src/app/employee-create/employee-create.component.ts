import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit{
  employee:Employee;

  constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute){
    this.employee=new Employee();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'] as string;
      if (id !== undefined) {
          this.employeeService.Getemployee(id).subscribe(res => {
          this.employee = res;
        });
      }
    });
  }


  // Save and update Employees
  SaveData(form:NgForm){
    if(form.valid){
      if(this.employee._id !== undefined){
        this.employeeService.Updateemployee(this.employee).subscribe(res=>{
          if(res.status==200){
            this.router.navigate(['/employee']); 
            }
          })
      }else{
        this.employeeService.Addemployee(this.employee).subscribe(res=>{
          if(res.status==201){
            this.router.navigate(['/employee']); 
            }
          })
      }
      
    }
  }

}
