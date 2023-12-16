import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{
  user: User;

  constructor(private userService:UserService,private router: Router,private route:ActivatedRoute){
    this.user = new User();
  }
ngOnInit(): void {
  this.route.params.subscribe(params => {
    let id = params['id'] as string;
    if (id !== undefined) {
      this.userService.GetUser(id).subscribe(res => {
        this.user = res;
      });
    }
  });
}
// Save and update user
  SaveData(form:NgForm){
    if(form.valid){
      if(this.user._id !== undefined){
        this.userService.UpdateUser(this.user).subscribe(res=>{
          if(res.status==200){
            this.router.navigate(['/']); 
            }
          })
      }else{
        this.userService.AddUser(this.user).subscribe(res=>{
          if(res.status==201){
            this.router.navigate(['/']); 
            }
          })
      }
      
    }
  }


}
