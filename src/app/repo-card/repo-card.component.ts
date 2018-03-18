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
    this.reposService.getIssues(owner, repo).subscribe(({data}) => {
      const {repository: {total: {totalCount: totalIssues}}} = data;
      const {repository: {open: {totalCount: openIssues}}} = data;

      this.totalIssues = totalIssues;
      this.openIssues = openIssues;
    });
  }

}
