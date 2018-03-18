import { Component, OnInit, Input } from '@angular/core';

import { ReposService } from '../repos/repos.service';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.less']
})
export class RepoCardComponent implements OnInit {
  @Input() repo = {};
  totalIssues = 0;
  openIssues = 0;

  constructor(public reposService: ReposService) { }

  ngOnInit() {
    const owner = this.repo['owner']['login'];
    const repo = this.repo['name'];
    const key = `${owner}/${repo}`;

    const loadIssuesInformation = (response, cacheResponse = true) => {
      const {data: {repository: {total: {totalCount: totalIssues}}}} = response;
      const {data: {repository: {open: {totalCount: openIssues}}}} = response;

      if (cacheResponse) {
        sessionStorage.setItem(key, JSON.stringify(response));
      }

      this.totalIssues = totalIssues;
      this.openIssues = openIssues;
    };

    const storageRepo = JSON.parse(sessionStorage.getItem(key));

    if (storageRepo) {
      loadIssuesInformation(storageRepo, false);
    } else {
      this.reposService.getIssues(owner, repo).subscribe(loadIssuesInformation);
    }
  }

}
