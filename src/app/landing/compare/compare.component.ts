import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { compareData } from './compareData';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['../landing.component.scss']
})

export class CompareComponent implements OnInit {

  data: any = compareData;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="assets/images/landing/nav-left.svg" alt="img" />', '<img src="assets/images/landing/nav-right.svg" alt="img" />'],
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
