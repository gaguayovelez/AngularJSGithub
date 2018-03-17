import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.less']
})
export class RepoCardComponent implements OnInit {
  @Input() repo = {};

  constructor() { }

  ngOnInit() {
  }

}
