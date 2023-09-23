import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { IUser } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: BehaviorSubject<IUser | null> =
    new BehaviorSubject<IUser | null>(null);

  user$ = this.user.asObservable();

  constructor(private _http: HttpClient, private _router: Router) {}

  login(email: string, password: string) {
    return this._http
      .post('http://localhost:3000/login', { email, password })
      .pipe(
        tap((data: any) => {
          this.user.next(data.user);
          this._router.navigate(['']);
          return data;
        })
      );
  }


  register(user: { username: string, password: string, email: string }) {
    return this._http
      .post('http://localhost:3000/register', user)
      .pipe(
        tap((data: any) => {
          this._router.navigate(['login']);
          return data;
        })
      );
  }
}
