import { Component } from '@angular/core';
import { IonicModules } from 'src/app/ionic-module/ionic.module';
import { CustomaryModule } from '../ionic-module/customary.module';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModules, CustomaryModule],
})
export class Tab1Page {
  constructor() {}
}
