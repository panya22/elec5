import { Component, OnInit } from '@angular/core';
import { IonicModules } from 'src/app/ionic-module/ionic.module';
import { CustomaryModule } from '../ionic-module/customary.module';
import { BannerComponent } from './banner/banner.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModules, CustomaryModule, BannerComponent],
})
export class Tab1Page implements OnInit {

  slides: any[] = [
    
  ];

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      { banner: '/assets/sample/pot1.jpg' },
      { banner: '/assets/sample/pot2.jpg'},
      { banner: '/assets/sample/pot3.jpg'}
    ];
  }
}
