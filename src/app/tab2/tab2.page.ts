import { Component } from '@angular/core';
import { IonicModules } from 'src/app/ionic-module/ionic.module';
import { CustomaryModule } from '../ionic-module/customary.module';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModules, CustomaryModule]
})
export class Tab2Page {

  constructor() {}

}
