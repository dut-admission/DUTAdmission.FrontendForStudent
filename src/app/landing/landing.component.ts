import { Component, OnInit } from '@angular/core';
import {User} from '../_entities/user';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
    currentUserValue: User;

  constructor() { }

  ngOnInit() {}

}
