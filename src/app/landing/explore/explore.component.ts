import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { exploreData } from './exploreData';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['../landing.component.scss']
})

export class ExploreComponent implements OnInit {

  data: any = exploreData;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="assets/images/landing/left-arrow.svg" alt="img" />', '<img src="assets/images/landing/right-arrow.svg" alt="img" />'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
