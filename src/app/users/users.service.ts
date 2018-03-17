import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users = 'https://api.github.com/users';
  token = 'f286f0a104630016fa385a88b0613af7d676e1bf';

  constructor(private http: HttpClient) { }

  getUsers(since) {
    return this.http.get(`${this.users}?since=${since}&access_token=${this.token}`);
  }
}
