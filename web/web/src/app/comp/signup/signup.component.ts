import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User;

  constructor(private userService: UserService,private router:Router) {
    this.user = new User();
   }

  signUp(form:NgForm): void {
  this.userService.AddUser(this.user).subscribe(res => {
    if (res && res.status === 201) {
      this.router.navigate(['/']);
    }
  });
}

}
