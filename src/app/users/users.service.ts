import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API } from '../app.api.config';

@Injectable()
export class UsersService {
  users = `${API.v3.url}/users`;
  accessToken = API.v3.accessToken;

  constructor(private http: HttpClient) { }

  getUsers(since) {
    return this.http.get(`${this.users}?since=${since}&access_token=${this.accessToken}`);
  }

  getUser(username) {
    return this.http.get(`${this.users}/${username}`);
  }
}
