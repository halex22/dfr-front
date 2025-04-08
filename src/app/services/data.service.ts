import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly baseUrl = 'http://localhost:8000/api/v1/'

  constructor() { }

  addMessage(msgText: string) {
    const token = localStorage.getItem('access_token')

    return fetch(this.baseUrl + 'messages/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify({text: msgText})
    })
    .then(res => {
      console.log(res)
      return res.json()
    })
    
  }
}
