import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReposService } from '../repos/repos.service';
import { Repository } from '../repos/repository';
import { repositoryDecorator } from '../repos/repository.decorator';
import { UsersService } from '../users/users.service';

import * as _ from 'underscore';
import * as Masonry from 'masonry-layout';

import { User } from '../users/user';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.less']
})
export class ReposComponent implements OnInit {
  username = '';
  user = {};
  collectionSize = 0;
  page = 1;
  itemsPerPage = 30;
  isLoading = false;
  repositories: Repository[] = [];

  constructor(private reposService: ReposService,
              private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.loadUserInformation();
    });
  }

  loadUserInformation() {
    const storageUser = JSON.parse(sessionStorage.getItem(this.username));
    const loadInformation = (user, cacheUser = true) => {
      this.user = user as User;
      this.collectionSize = Math.ceil((user['public_repos'] || 0) / this.itemsPerPage) * 10;
      this.route.queryParams.subscribe(queryParams => {
        this.page = (+queryParams['page'] || 1);
        this.loadRepositories(this.page);

        if (cacheUser) {
          sessionStorage.setItem(this.username, JSON.stringify(this.user));
        }
      });
    };

    if (storageUser) {
      loadInformation(storageUser, false);
    } else {
      this.usersService.getUser(this.username).subscribe(loadInformation);
    }
  }

  onPageChange(page) {
    this.router.navigate(['users', this.username], { queryParams: { page } });
  }

  loadRepositories(page) {
    this.isLoading = false;
    this.reposService.getRepos(this.username, page).subscribe(repos => {
      this.isLoading = true;
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
