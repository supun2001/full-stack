import { Component, OnInit } from '@angular/core';
import { Phone } from '../model/phone';
import { PhoneService } from '../service/phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit{

  phones:Phone[]=[];

  constructor(private phoneService:PhoneService,private router:Router){}

  ngOnInit(): void {
    this.phoneService.GetPhones().subscribe(res=>{
      this.phones=res;
    })
  }

  // Delete Phone
  deletePhone(id: any) {
    if (confirm("Are you sure to delete?")) {
      this.phoneService.DeleteUser(id).subscribe(res => {
        if (res.status == 200) {
          for (let i = 0; i < this.phones.length; i++) {
            if (id == this.phones[i]._id) {
              this.phones.splice(i, 1);
              window.location.reload()
              break;
            }
          }
        }
      });
    }
  }
}
