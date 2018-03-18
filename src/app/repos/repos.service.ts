import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../app.api.config';

@Injectable()
export class ReposService {
  apiV3 = API.v3.url;
  accessToken = API.v3.accessToken;

  apiV4 = API.v4.url;
  authorization = API.v4.authorization;

  constructor(private http: HttpClient) { }

  getRepos(username, page) {
    const url = `${this.apiV3}/users/${username}/repos?page=${page}&access_token=${this.accessToken}`;
    return this.http.get(url);
  }

  getIssues(owner, repo) {
    const query = `{
      repository(owner: "${owner}", name: "${repo}") {
        total: issues {
          totalCount
        },
        open: issues(states: CLOSED) {
          totalCount
        }
      }
    }`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authorization
      })
    };

    return this.http.post(this.apiV4, { query }, httpOptions);
  }
}
