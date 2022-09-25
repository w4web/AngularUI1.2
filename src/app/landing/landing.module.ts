import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CompareComponent } from './compare/compare.component';
import { PreviewComponent } from './preview/preview.component';
import { ToolsComponent } from './tools/tools.component';
import { ExploreComponent } from './explore/explore.component';
import { SocialComponent } from './social/social.component';
import { NewsComponent } from './news/news.component';
import { TrynowComponent } from './trynow/trynow.component';
import { DownloadComponent } from './download/download.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: LandingComponent }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    BannerComponent,
    CompareComponent,
    PreviewComponent,
    ToolsComponent,
    ExploreComponent,
    SocialComponent,
    NewsComponent,
    TrynowComponent,
    DownloadComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule
  ]
})

export class LandingModule { }
