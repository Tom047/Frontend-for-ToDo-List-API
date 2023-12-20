import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  registerUser = { username: '', password: '' };
  loginUser = { username: '', password: '' };
  token?: string;

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.registerUser).subscribe(response => {
      console.log('Registration successful');
      this.token = response.token;
      // Сохраните токен в локальном хранилище или в сервисе
    });
  }

  login(): void {
    this.authService.login(this.loginUser).subscribe(response => {
      console.log('Login successful');
      this.token = response.token;
      // Сохраните токен в локальном хранилище или в сервисе
    });
  }
}