import { Component, OnInit, Input } from '@angular/core';

import { Article } from 'src/app/models/models';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() new: Article;
  @Input() index: number;

  constructor() { }

  ngOnInit() {}

}