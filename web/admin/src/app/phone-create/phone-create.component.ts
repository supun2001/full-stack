import { Component, OnInit } from '@angular/core';
import { Phone } from '../model/phone';
import { PhoneService } from '../service/phone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.css']
})
export class PhoneCreateComponent implements OnInit{
  phone:Phone;

  constructor(private phoneService:PhoneService,private router:Router,private route:ActivatedRoute){
    this.phone= new Phone();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'] as string;
      if (id !== undefined) {
          this.phoneService.GetPhone(id).subscribe(res => {
          this.phone = res;
        });
      }
    });
  }

  // Save and update phone
  SaveData(form:NgForm){
    if(form.valid){
      if(this.phone._id !== undefined){
        this.phoneService.UpdateUser(this.phone).subscribe(res=>{
          if(res.status==200){
            this.router.navigate(['/phone']); 
            }
          })
      }else{
        this.phoneService.AddPhone(this.phone).subscribe(res=>{
          if(res.status==201){
            this.router.navigate(['/phone']); 
            }
          })
      }
      
    }
  }
}
