import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showRegistrationForm: boolean = false;
  loginData = {
    email: '',
    password: ''
  };
  registrationData = { fullName: '', username: '', email: '', password: '' };

  constructor(private authService: AuthService) {} // Inyecta el servicio AuthService

  login() {
    this.authService.login(this.loginData)
      .subscribe(
        (response) => {
          // Manejar la respuesta de la autenticación (p. ej., guardar el token)
          console.log('Inicio de sesión exitoso:', response);
          // Aquí podrías redirigir a otra página después del login exitoso
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          // Manejar errores de autenticación
        }
      );
  }

  register() {
    this.authService.register(this.registrationData)
      .subscribe(
        (response) => {
          // Manejar la respuesta del registro
          console.log('Registro exitoso:', response);
          // Aquí podrías redirigir a otra página después del registro exitoso
        },
        (error) => {
          console.error('Error al registrar:', error);
          // Manejar errores de registro
        }
      );
  }
}
