import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
  @Input() user = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToRepos(username) {
    this.router.navigate(['users', username]);
  }
}
