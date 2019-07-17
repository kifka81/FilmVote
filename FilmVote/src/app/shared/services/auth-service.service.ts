import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = environment.API_URL;
  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLogged());

  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  registerUser(email: string, password: string) {


    return this.http.post<User>(
        this.authURL + 'register',
        {

          email,
          password
        }, ).pipe(tap(data => data),
        catchError(error => {console.log(error);
                             return throwError(error); }));
    }


 getLogged():boolean{
    if(localStorage.getItem('isLogged')==='true'){
     return true;
    }else {return false};
}

loginuser(email: string, password: string): Observable<any> {

  return this.http.post<User>(
      this.authURL + 'users',
      { email, password },
      { headers: this.headers }
    )
    .pipe(tap(data => {
      localStorage.setItem('isLogged','true');
     //  this.setToken(data.accessToken)   To try
      this.isLogged.next(true);
      return data}),
    catchError(error => {console.log(error);
                         return throwError(error); }));
}


setToken(token): void {
  localStorage.setItem('accessToken', token);    //
}

getToken() {
  const accessToken = localStorage.getItem('accessToken');
  if (!(accessToken === undefined || accessToken === null)) {
    return accessToken;
  } else {
    return null;
  }

}

logoutUser() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('isLogged');
}

}

