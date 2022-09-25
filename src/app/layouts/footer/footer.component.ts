import { Component, OnInit } from '@angular/core';
import { links } from './footerLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../landing/landing.component.scss']
})

export class FooterComponent implements OnInit {

  tools: any = links.tools;
  compare: any = links.compare;
  preview: any = links.preview;

  constructor() { }

  ngOnInit(): void {

  }

}
