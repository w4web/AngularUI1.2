import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../landing/landing.component.scss']
})
export class HeaderComponent implements OnInit {

  public showMobileMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(): void {
    this.showMobileMenu = false;
  }

}
