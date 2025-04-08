import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  from = new FormGroup({
    message: new FormControl('this is a text sample')
  })

  constructor(private dataService: DataService) {}

  handleSubmit(){
    const text = this.from.value.message?? 'here'
    this.dataService.addMessage(text)
  }
}
