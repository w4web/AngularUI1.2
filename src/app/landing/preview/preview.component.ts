import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { previewData } from './previewData';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['../landing.component.scss']
})

export class PreviewComponent implements OnInit {

  data: any = previewData;

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
