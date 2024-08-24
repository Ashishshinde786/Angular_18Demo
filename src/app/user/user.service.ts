// // user.service.ts
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { User } from '../models/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private apiUrl = 'http://localhost:8080/users'; // API endpoint

//   constructor(private http: HttpClient) {}

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }

//   addUser(user: User): Observable<User> {
//     return this.http.post<User>(`${this.apiUrl}/register`, user);
//   }
// }

// user.service.ts


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { User } from '../models/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private apiUrl = 'http://localhost:8080/users/getAllUsers'; // Updated API endpoint

//   constructor(private http: HttpClient) {}

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }

//   addUser(user: User): Observable<User> {
//     return this.http.post<User>(`http://localhost:8080/users/register`, user);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users'; // Base API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/getAllUsers`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }
}
