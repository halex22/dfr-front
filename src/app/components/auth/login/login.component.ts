import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('tester', {
      validators: Validators.required
    }),
    password: new FormControl('123456789', {
      validators: Validators.required
    })
  })

  constructor(private authService: AuthenticationService, private router: Router) {}

  handleSubmit() {
    const username = this.loginForm.value.username ?? ''
    const password = this.loginForm.value.password ?? ''

    this.authService.login({username, password})
    .then(() => this.router.navigate(['/']))
    .catch((err => console.error(err)))
  }
}
