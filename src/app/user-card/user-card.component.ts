import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
  @Input() user = {};

  constructor() {
  }

  ngOnInit() {
  }

}
