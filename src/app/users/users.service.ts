import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.users);
  }
}
