import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user = { name: '', password: '' }; // Assuming you have a form model
  errorMessage = '';

  constructor(private userService: UserService,private router:Router) {}

  login(form: any): void {
    if (form.invalid) {
      // Form is invalid, handle validation errors
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    const { name, password } = this.user;

    this.userService.Login( name, password).subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
        console.error('Login error', error);
      }
    );
  }
}
