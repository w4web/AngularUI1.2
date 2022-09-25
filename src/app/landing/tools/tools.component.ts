import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { toolsData } from './toolsData';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../landing.component.scss']
})

export class ToolsComponent implements OnInit {

  data: any = toolsData;

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
