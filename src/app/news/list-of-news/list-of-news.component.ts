import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-news',
  templateUrl: './list-of-news.component.html',
  styleUrls: ['./list-of-news.component.scss']
})
export class ListOfNewsComponent implements OnInit {
  page = 2;
  page1 = 3;
  constructor() { }

  ngOnInit() {
  }

}
