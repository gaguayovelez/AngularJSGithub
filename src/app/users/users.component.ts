import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';

import * as _ from 'underscore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  since: 0;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers(this.since).subscribe(users => {
      this.users = this.users.concat(users as User[]);
      this.since = (_.max(this.users, ({id}) => id) || {id: 0}).id;
    });
  }
}
