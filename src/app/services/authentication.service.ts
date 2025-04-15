import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly baseUrl = 'http://localhost:8000/api/'
  private readonly access_key = 'access_token' 
  private readonly refresh_key = 'refresh_token' 

  constructor() { }

  login(credentials: {username: string, password: string }) {
    return fetch(this.baseUrl + 'token/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(res => {
      if (!res.ok) throw new Error('wrong credentials or account not found')
      return  res.json()
    })
    .then(data => {
      localStorage.setItem(this.access_key, data.access)
      localStorage.setItem(this.refresh_key, data.refresh)
    })

  }

  signUpUser(userInformation: {username: string, password: string, email: string}) {
    return fetch(this.baseUrl + '/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInformation)
    }).then(res => {
      if (!res.ok) throw new Error('could not create new user, please try again')
      return res.json()
    })
  }

}
