/*
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

export interface UserDetails {
  id: number
  username: string
  password: number
}

interface TokenResponse {
  token: string
}

@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken (token: string): void {
    localStorage.setItem('userToken', token)
    this.token = token
  }


  getUserDetails(username: any, password: any){
    // post these details to API server return user info if correct
    return this.http.post('/api/')
  }
}
*/
