import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })

  onSubmit(){
    console.log(this.form)
  }
}
