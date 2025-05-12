import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverAddress:string = environment.serverAddress
  private http = inject(HttpClient)
  constructor() { }

  onLogin(userAuth:UserAuth): Observable<any>{
    return this.http.post(`${this.serverAddress}/auth/login`,userAuth)
  }

  onAutoLogin() :Observable<any>{
    return this.http.get(`${this.serverAddress}/auth/me`).pipe(tap(res => console.log(res)
    ))
  }
}
