import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { newsData } from './newsData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['../landing.component.scss']
})

export class NewsComponent implements OnInit {

  data: any = newsData;

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
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
