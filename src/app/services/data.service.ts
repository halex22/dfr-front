import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly baseUrl = 'http://localhost:8000/api/v1/'

  constructor() { }

  
}
