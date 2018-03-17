import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReposService {
  users = 'https://api.github.com/users';
  token = '319a2d7afd591b684cbc3efb2e4a9c56a6d25407';

  constructor(private http: HttpClient) { }

  getRepos(username) {
    const url = `${this.users}/${username}/repos?&access_token=${this.token}`;
    return this.http.get(url);
  }
}
