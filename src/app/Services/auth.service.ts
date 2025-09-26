import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap ,BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private tokenKey: string = 'token';
   private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  loggedIn$ = this.loggedInSubject.asObservable();
  constructor(private _HttpClient : HttpClient) {}

    login(username:string, password:string) : Observable<any>{
    return this._HttpClient.post<any>(environment.API_AUTH,{
      username ,
      password,
    }).pipe(tap((res:any) => {
      localStorage.setItem(this.tokenKey , res.token);
      this.loggedInSubject.next(true);   // 🔔 notify navbar
    }))
   }

   isLoggedIn (): boolean {
    return localStorage.getItem(this.tokenKey) ? true : false;
   }

    logout() {
    localStorage.removeItem(this.tokenKey);
    this.loggedInSubject.next(false);      // 🔔 notify navbar
  }
}
