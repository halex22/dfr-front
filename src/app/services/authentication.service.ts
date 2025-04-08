import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly baseUrl = 'http://localhost:8000/api/'
  private readonly access_key = 'access_token' 
  private readonly refresh_key = 'access_token' 

  constructor() { }

  login(credentials: {username: string, password: string }) {
    fetch(this.baseUrl + 'token/', {
      method: "POST",
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
}
