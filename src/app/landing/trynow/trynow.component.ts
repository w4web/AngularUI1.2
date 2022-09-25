import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trynowData } from './trynowData';

@Component({
  selector: 'app-trynow',
  templateUrl: './trynow.component.html',
  styleUrls: ['../landing.component.scss']
})

export class TrynowComponent implements OnInit {

  data: any = trynowData;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
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
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
