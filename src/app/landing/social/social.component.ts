import { Component, OnInit } from '@angular/core';
import { socialData } from './socialData';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['../landing.component.scss']
})

export class SocialComponent implements OnInit {

  data: any = socialData;

  constructor() { }

  ngOnInit(): void {

  }

}
