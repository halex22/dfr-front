import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: Validators.required
    }),
    password: new FormControl('', {
      validators: Validators.required
    })
  })

  handleSubmit() {
    console.log('here')
  }
}
