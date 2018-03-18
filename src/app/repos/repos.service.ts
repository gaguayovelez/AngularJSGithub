import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReposService {
  apiV3 = 'https://api.github.com/users';
  apiV4 = 'https://api.github.com/graphql';
  authorization = 'Basic Z29uemFsby5hZ3VheW8udmVsZXpAZ21haWwuY29tOkFkbWluNjUw';
  accessToken = '319a2d7afd591b684cbc3efb2e4a9c56a6d25407';

  constructor(private http: HttpClient) { }

  getRepos(username, page) {
    const url = `${this.apiV3}/${username}/repos?page=${page}&access_token=${this.accessToken}`;
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
