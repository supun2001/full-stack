import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users:User[]=[];

  constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(res=>{
      this.users=res;
    })
  }

  // Delete user
  deleteUser(id: any) {
    if (confirm("Are you sure to delete?")) {
      this.userService.DeleteUser(id).subscribe(res => {
        if (res.status == 200) {
          for (let i = 0; i < this.users.length; i++) {
            if (id == this.users[i]._id) {
              this.users.splice(i, 1);
              window.location.reload()
              break;
            }
          }
        }
      });
    }
  }
}
