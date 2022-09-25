import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['../landing.component.scss']
})
export class BannerComponent implements OnInit {

  public selectedSlide = 1;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.selectedSlide == 5) {
        this.selectedSlide = 1;
      } else {
        this.selectedSlide = this.selectedSlide + 1;
      }
    }, 3000);
  }

  slideChange(i: number): void {
    this.selectedSlide = i;
  }

}
