import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReposService } from '../repos/repos.service';
import { Repository } from '../repos/repository';
import { repositoryDecorator } from '../repos/repository.decorator';

import * as _ from 'underscore';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.less']
})
export class ReposComponent implements OnInit {
  username = '';
  repositories: Repository[] = [];

  constructor(private reposService: ReposService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.username = params['username'];
      this.loadRepositories();
    });
  }

  loadRepositories() {
    this.reposService.getRepos(this.username).subscribe(repos => {
      this.repositories = (repos as Repository[]).map(repo => _.extend(repo, repositoryDecorator));

      setTimeout(() => {
        const elem = document.querySelector('.repositories');
        const msnry = new Masonry(elem, {
          itemSelector: '.repo'
        });
      }, 200);
    });
  }
}
