import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users = 'https://api.github.com/users';
  token = '319a2d7afd591b684cbc3efb2e4a9c56a6d25407';

  constructor(private http: HttpClient) { }

  getUsers(since) {
    return this.http.get(`${this.users}?since=${since}&access_token=${this.token}`);
  }

  getUser(username) {
    return this.http.get(`${this.users}/${username}`);
  }
}
