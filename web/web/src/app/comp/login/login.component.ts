import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user = { name: '', password: '' }; // Assuming you have a form model
  errorMessage = '';

  constructor(private userService: UserService) {}

  login(form: any): void {
    if (form.invalid) {
      // Form is invalid, handle validation errors
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    const { name, password } = this.user;

    this.userService.login(name, password).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful', response);
        // Optionally, you can navigate to a different page upon successful login
      },
      (error) => {
        // Handle login error
        console.error('Login error', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
